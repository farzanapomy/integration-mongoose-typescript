import config from '../../config';
import { Student } from '../students/student.model';
import { TStudent } from '../students/student_interface';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // set student object
  const userData: Partial<TUser> = {};

  //if password is not given , use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //set manually generated it
  userData.id = '2030100001';

  // create a user
  const newUser = await UserModel.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

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
