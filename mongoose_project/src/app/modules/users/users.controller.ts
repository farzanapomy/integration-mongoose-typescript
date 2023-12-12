import { NextFunction, Request, Response } from 'express';
import { UserServices } from './users.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, students: studentData } = req.body;
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    console.log(result);
    // return result;
    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err) {
    next(err);
  }
};
export const UserController = {
  createStudent,
};
