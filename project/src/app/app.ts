import { error } from 'console';
import express, { NextFunction, Request, Response } from 'express';
const app = express();

// parser
app.use(express.json());
app.use(express.text());

// routes
const userRoutes = express.Router();

userRoutes.get('/api/v1/users/create-users', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.send({ success: true, message: 'User created successfully', data: user });
});
app.use('/', userRoutes);
// middlewares
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('URL', req.url);
  next();
};

app.get('/', logger, (req: Request, res: Response) => {
  try {
    res.send('fdfdfd');
  } catch (error) {
    res.status(400).json({ success: false, message: 'failed to get data' });
  }
});

app.get('/d', logger, (req: Request, res: Response) => {
  console.log(req.query);
  // console.log('req.body');
  // if (req.statusCode === 400) {
  //   res.send({ msg: 'something jhamela!' });
  // }
  res.send('Hello Backend!');
});

app.all('*', (req: Request, res: Response) => {
  res.status(400).json({
    success:false,
    message:'Router not found'
  })
});

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send({ msg: 'Success!' });
});

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
});

export default app;
