import express from 'express';
import { StudentController } from './student.controller';

const route = express.Router();

// call controller function
route.get('/create-student', StudentController.createStudent);
