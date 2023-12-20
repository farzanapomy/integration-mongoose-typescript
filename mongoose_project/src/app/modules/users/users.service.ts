import config from '../../config';
// import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model';
import { Student } from '../students/student.model';
import { TStudent } from '../students/student_interface';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { generateStudentId } from './user.utils';

// const createStudentIntoDB = async (password: string, payload: TStudent) => {
//   // set student object
//   const userData: Partial<TUser> = {};

//   //if password is not given , use default password
//   userData.password = password || (config.default_password as string);
//   //set student role
//   userData.role = 'student';

//   // find academic semester info
//   const admissionSemester = await AcademicSemesterModel.findById(
//     payload.admissionSemester,
//   );

//   //set  generated id
//   userData.id = 'generateStudentId(admissionSemester)';

//   // create a user
//   const newUser = await UserModel.create(userData);

//   //create a student
//   if (Object.keys(newUser).length) {
//     // set id , _id as user
//     payload.id = newUser.id;
//     payload.user = newUser._id; //reference _id

//     const newStudent = await Student.create(payload);
//     return newStudent;
//   }
//   //  instance methods
//   // const student = new Student(studentData);
//   // const result = await student.save(); //built in instance method
//   // if (await student.isUserExists(studentData.id)) {
//   //   throw new Error('User already exists');
//   // }

//   // use Statics method
// };
const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  // const admissionSemester = await AcademicSemesterModel.findById(
  //   payload.admissionSemester,
  // );

  // //set  generated id
  // userData.id = generateStudentId(admissionSemester);

  // create a user
  const newUser = await UserModel.create(userData);
  console.log(newUser);
  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //reference _id

    const newStudent = await Student.create(payload);
    console.log(newStudent);
    return newStudent;
  }
};
export const UserServices = {
  createStudentIntoDB,
};
