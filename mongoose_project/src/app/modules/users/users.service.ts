import config from '../../config';
import { Student } from '../students/student.model';
import { TStudent } from '../students/student_interface';
import { NewUser, TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // set student object
  const userData: Partial<TUser> = {};

  //  if password is not provided,used default password

  // set role
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  // set generated id manually
  userData.id = '203020001';

  // create a user
  const newUser = await UserModel.create(userData); //built in static method
  // create a student
  if (Object.keys(newUser).length) {
    // set a student object
    studentData.id = newUser.id; //embedded
    studentData.user = newUser._id; //reference _ID

    const newStudent = await Student.create(studentData);
    return newStudent;
  }

  //  instance methods
  // const student = new Student(studentData);
  // const result = await student.save(); //built in instance method
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }

  // use Statics method

};

export const UserServices = {
  createStudentIntoDB,
};
