import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
    .message(
      '{#label} should start with an uppercase letter and contain only letters',
    ),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, { name: 'alpha' })
    .message('{#label} should contain only letters'),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().trim(),
  fatherOccupation: Joi.string().required().trim(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string().required().trim(),
  motherContactNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloogGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddres: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string(),
});

export default studentValidationSchema;
