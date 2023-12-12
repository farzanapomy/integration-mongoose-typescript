import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

// call controller function
// router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.getAllStudent);
router.get('/:stdId', StudentController.getSingleStudent);
router.delete('/:stdId', StudentController.deleteSingleStudent);
export const StudentRoutes = router;
