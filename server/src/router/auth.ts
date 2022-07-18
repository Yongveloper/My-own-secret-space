import express from 'express';
import {} from 'express-async-errors';
import { body } from 'express-validator';
import * as authController from '../controller/auth';
import { isAuth } from '../middleware/auth';
import { validate } from '../middleware/validator';

const router = express.Router();

const validateCredential = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('이메일 형식이 올바르지 않습니다.'),
  body('password')
    .trim()
    .isLength({ min: 8 })
    .withMessage('비밀번호는 최소 8자리 이상이어야 합니다.'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('username').notEmpty().withMessage('이름을 입력해주세요.'),
  validate,
];

router.post('/signup', validateSignup, authController.signup);

router.post('/login', validateCredential, authController.login);

router.get('/me', isAuth, authController.me);

export default router;
