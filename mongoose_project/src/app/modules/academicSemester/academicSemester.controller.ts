import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../middleware/catchAsync';
import sendResponse from '../../utils/sendRespond';
import { AcademicSemesterService } from './academicSemester.service';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.createAcademicSemesterIntoDB(
    req.body,
  );
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicSemester created successfully',
    data: result,
  });
});

const getAllAcademicSemesters: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterService.getAllAcademicSemestersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semesters are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicSemester: RequestHandler = catchAsync(
  async (req, res) => {
    const { semesterId } = req.params;
    const result =
      await AcademicSemesterService.getSingleAcademicSemesterFromDB(semesterId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semesters are retrieved successfully',
      data: result,
    });
  },
);

const updateAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterService.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
