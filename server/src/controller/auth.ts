import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {} from 'express-async-errors';
import * as userRepository from '../data/auth';
import { config } from '../config';

export async function signup(req: Request, res: Response) {
  const { username, email, password } = req.body;
  const foundEmail = await userRepository.findByEmail(email);
  const foundUsername = await userRepository.findByUsername(username);
  if (foundEmail) {
    return res
      .status(409)
      .json({ existence: 'email', message: `${email} already exists` });
  }
  if (foundUsername) {
    return res
      .status(409)
      .json({ existence: 'username', message: `${username} already exists` });
  }

  const hashedPassword = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    username,
    email,
    password: hashedPassword,
  });
  const token = createJwtToken(userId);

  res.status(201).json({ token, email, username });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await userRepository.findByEmail(email);
  if (!user) {
    return res
      .status(401)
      .json({ message: '이메일 또는 비밀번호가 잘못 되었습니다.' });
  }
  const { username } = user;

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res
      .status(401)
      .json({ message: '이메일 또는 비밀번호가 잘못 되었습니다.' });
  }

  if (user.id) {
    const token = createJwtToken(user.id);
    res.status(201).json({ token, email, username });
  }
}

function createJwtToken(id: string) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
}

export async function me(req: Request, res: Response) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json({ token: req.token, email: user.email });
}
