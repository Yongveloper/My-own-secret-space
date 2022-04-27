import express from 'express';
import {} from 'express-async-errors';
import { body } from 'express-validator';
import * as authController from '../controller/auth';
import { isAuth } from '../middleware/auth';
import { validate } from '../middleware/validator';

const router = express.Router();

const validateCredential = [
  body('email').isEmail().normalizeEmail().withMessage('invalid email'),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('password should be at least 6 characters'),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body('username').notEmpty().withMessage('name is missing'),
  validate,
];

router.post('/signup', validateSignup, authController.signup);

router.post('/login', validateCredential, authController.login);

router.get('/me', isAuth, authController.me);

export default router;
