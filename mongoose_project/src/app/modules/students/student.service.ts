import { Student } from './student.model';
import { TStudent } from './student_interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); //built in static method

  //  instance methods
  const student = new Student(studentData);
  // const result = await student.save(); //built in instance method

  if (await student.isUserExists(studentData.id)) {
    throw new Error('User already exists');
  }

  // return result;
};

const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

const gerSingleStudentFromDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDb,
  gerSingleStudentFromDb,
};
