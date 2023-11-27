import { StudentModel } from './student.model';
import { Student } from './student_interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
