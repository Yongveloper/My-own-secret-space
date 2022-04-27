import express from 'express';
import * as diaryController from '../controller/diaries';

const router = express.Router();

router.get('/', diaryController.getDiaries);

router.post('/', diaryController.createDiary);

router.put('/:id', diaryController.updateDiary);

router.delete('/:id', diaryController.deleteDairy);

export default router;
