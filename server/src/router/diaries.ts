import express from 'express';
import { body } from 'express-validator';
import * as diaryController from '../controller/diaries';
import { isAuth } from '../middleware/auth';
import { validate } from '../middleware/validator';

const router = express.Router();

const validateDiary = [
  body('title')
    .trim()
    .isLength({ min: 1 })
    .withMessage('title should be at least 3 characters'),
  body('text')
    .trim()
    .isLength({ min: 10 })
    .withMessage('text should be at least 10 characters'),
  validate,
];

router.get('/', isAuth, diaryController.getDiaries);

router.post('/', isAuth, validateDiary, diaryController.createDiary);

router.put('/:id', isAuth, validateDiary, diaryController.updateDiary);

router.delete('/:id', isAuth, diaryController.deleteDairy);

export default router;
