import { Router } from 'express';
import { StudentRoutes } from '../modules/students/student.route';
import { UsersRoutes } from '../modules/users/users.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UsersRoutes,
  },
  {
    path: '/create-academic',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

// router.use('/students', StudentRoutes);
// router.use('/users', UsersRoutes);

export default router;
