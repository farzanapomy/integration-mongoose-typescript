import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating schema using ZOD

    const student = req.body.students;
    // const zodParseData = studentZodValidationSchema.parse(student);

    // creating schema using joi
    const { error, value } = studentValidationSchema.validate(student);
    console.log(error, value);
    //   call service function to sent the res
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: error,
      });
    }
    const result = await StudentServices.createStudentIntoDB(student);
    console.log(result);
    // return result;
    // send response
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
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
