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
    .withMessage('제목은 최소 3글자 이상이어야 합니다.'),
  body('text')
    .trim()
    .isLength({ min: 10 })
    .withMessage('내용은 최소 10글자 이상이어야 합니다.'),
  validate,
];

router.get('/', isAuth, diaryController.getDiaries);

router.get('/:id', isAuth, diaryController.getDiaryDetail);

router.post('/', isAuth, validateDiary, diaryController.createDiary);

router.put('/:id', isAuth, validateDiary, diaryController.updateDiary);

router.delete('/:id', isAuth, diaryController.deleteDairy);

export default router;
