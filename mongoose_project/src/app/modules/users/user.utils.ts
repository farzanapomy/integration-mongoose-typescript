import { TAcademicSemester } from '../academicSemester/academicSemester.interface';

export const generateStudentId = (payload: TAcademicSemester) => {
  const currentId = (0).toString().padStart(4, '0');
  let incrementId = (Number(currentId) + 1).toString();

  incrementId = `${payload.name} ${payload.year} ${incrementId}`;
  return incrementId;
};
