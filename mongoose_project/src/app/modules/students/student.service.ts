import { Student } from './student.model';
import { TStudent } from './student_interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  // if (await Student.isUserExist(studentData.id)) {
  //   throw new Error('User already exists here');
  // }

  
  const result = await Student.create(studentData); //built in static method

  //  instance methods
  // const student = new Student(studentData);
  // const result = await student.save(); //built in instance method
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  // use Statics method

  return result;
};

const getAllStudentFromDb = async () => {
  const result = await Student.find();
  return result;
};

const deleteStudentFromDb = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

const gerSingleStudentFromDb = async (id: string) => {
  // const result = await Student.findOne({ id });

  // use Aggregate
  const result=await Student.aggregate([

    {$match:{id: id}},
  ])


  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDb,
  gerSingleStudentFromDb,
  deleteStudentFromDb,
};
