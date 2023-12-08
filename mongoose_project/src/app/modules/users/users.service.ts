import { UserModel } from "./user.model";

const createStudentIntoDB = async (studentData: TStudent) => {
//   if (await Student.isUserExist(studentData.id)) {
//     throw new Error('User already exists here');
//   }

  const result = await UserModel.create(studentData); //built in static method

  //  instance methods
  // const student = new Student(studentData);
  // const result = await student.save(); //built in instance method
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  // use Statics method

  return result;
};

export const userService = {
  createStudentIntoDB,
};
