import { Request, Response } from 'express';
import { StudentServices } from './student.service';
// import studentValidationSchema from './student.validation';
// import studentZodValidationSchema from './student.zod.validation';
// import studentValidationSchema from './student.validation';

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const student = await StudentServices.getAllStudentFromDb();
    // send response
    res.status(200).json({
      success: true,
      message: 'Students retrieved successfully',
      data: student,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.stdId;
    const result = await StudentServices.gerSingleStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: 'Get single Students from db successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
const deleteSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.stdId;
    const result = await StudentServices.deleteStudentFromDb(id);
    res.status(200).json({
      success: true,
      message: 'single Students deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const StudentController = {
  getAllStudent,
  getSingleStudent,
  deleteSingleStudent,
};
