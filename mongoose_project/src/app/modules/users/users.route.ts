import express from 'express';

const router = express.Router();

// call controller function
router.post('/create-student', UsersController.createStudent);
export const UsersRoutes = router;
