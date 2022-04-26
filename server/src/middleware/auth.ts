import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import * as userRepository from '../data/auth';

const AUTH_ERROR = { message: 'Authentication Error' };

export const isAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.get('Authorization');
  if (!(authHeader && authHeader.startsWith('Bearer '))) {
    return res.status(401).json(AUTH_ERROR);
  }

  let isJWTValid = false;
  const token = authHeader.split(' ')[1];

  jwt.verify(token, config.jwt.secretKey, async (error, decoded) => {
    if (error) {
      return res.status(401).json(AUTH_ERROR);
    }
    isJWTValid = true;
  });

  if (!isJWTValid) {
    return res.status(401).json(AUTH_ERROR);
  }

  const decodedToken = jwt.decode(token) as { id: string };
  const user = await userRepository.findById(decodedToken.id);
  if (!user) {
    return res.status(401).json(AUTH_ERROR);
  }
  req.token = token;
  req.userId = user.id;
  next();
};
