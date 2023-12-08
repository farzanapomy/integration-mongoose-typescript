import { Student } from './student.model';
// import { TStudent } from './student_interface';

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
  const result = await Student.aggregate([{ $match: { id: id } }]);

  return result;
};

export const StudentServices = {
  getAllStudentFromDb,
  gerSingleStudentFromDb,
  deleteStudentFromDb,
};
