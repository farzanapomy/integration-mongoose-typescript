import { Schema, model } from 'mongoose';
import {
  TAcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface';

const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const AcademicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summer',
  'Fall',
];
const AcademicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];
const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      require: true,
      enum: AcademicSemesterName,
    },
    year: {
      type: Date,
      required: [true, 'Year is required'],
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true, 
      enum: months,
    },
    endMonth: {
      type: String,
      required: true,
      enum: months,
    },
  },
  {
    timestamps: true,
  },
);

export const academicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
