import "reflect-metadata"

import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import logger from './config/logger.js';
const app = express();
import { type HttpError } from 'http-errors';
import authRouther from './routes/auth.js';

app.get('', (req, res) => {
  res.send('Welcome to the page');
});

app.use('/auth', authRouther);
//global error handle
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
      errors: [
        {
          type: err.name,
          msg: err.message,
          path: '',
          location: '',
        },
      ],
    });
  }
);
export default app;
