/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.route';
import { UsersRoutes } from './app/modules/users/users.route';
import { globalErrorhandler } from './app/middleware/globalErrorHandler';

app.use(express.json());
app.use(cors());

// routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', UsersRoutes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Here is the real celprite' });
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(globalErrorhandler);

export default app;
