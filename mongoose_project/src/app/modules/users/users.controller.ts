import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../middleware/catchAsync';
import sendResponse from '../../utils/sendRespond';
import { UserServices } from './users.service';

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, students: studentData } = req.body;
  const result = await UserServices.createStudentIntoDB(password, studentData);
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully',
    data: result,
  });
});
export const UserController = {
  createStudent,
};
