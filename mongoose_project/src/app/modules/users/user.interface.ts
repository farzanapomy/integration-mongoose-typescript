export type TUser = {
  id: string;
  password: string;
  needsPasswordChange?: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDelete: boolean;
};

// export type NewUser = {
//   role: string;
//   password: string;
//   id: string;
// };
