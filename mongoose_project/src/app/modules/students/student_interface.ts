import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fathersName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  mothersName: string;
  mothersOccupation: string;
  mothersContactNumber: string;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian={
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}


export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  EmergencyContactNumber: string;
  bloodStatus?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB' | 'O';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  email: string;
  localGuardian:LocalGuardian
  avatar?: string;
};
