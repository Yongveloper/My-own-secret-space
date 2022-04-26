import express from 'express';
import {} from 'express-async-errors';
import * as authController from '../controller/auth';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

export default router;
