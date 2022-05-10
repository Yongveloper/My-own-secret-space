import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import diariesRouter from './router/diaries';
import authRouter from './router/auth';
import { config } from './config';
import { connectDB } from './database/database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/auth', authRouter);
app.use('/diaries', diariesRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.sendStatus(500);
});

connectDB()
  .then(() => {
    console.log('Connect MongoDB✅✅');
    app.listen(config.host.port);
  })
  .catch(console.error);
