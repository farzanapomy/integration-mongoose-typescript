import express from 'express';
import { UserController } from './users.controller';

const router = express.Router();

// call controller function
router.post('/create-student', UserController.createStudent);
export const UsersRoutes = router;
