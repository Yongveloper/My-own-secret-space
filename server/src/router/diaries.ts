import express from 'express';
import * as diariesRepository from '../controller/diaries';

const router = express.Router();

router.get('/', diariesRepository.getDiaries);

export default router;
