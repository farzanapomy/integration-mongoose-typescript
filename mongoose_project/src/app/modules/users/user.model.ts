import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';
const usersSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      maxLength: [20, 'Password can not exceed 20 characters'],
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'student', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
// middleware pre set hooks . will work on create() ,  save()
usersSchema.pre('save', async function (next) {
  // console.log(this, 'pre hook saved');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hashing password
  user.password = await bcrypt.hash(
    user.password,
    Number(config.saltRounds_url),
  );
  next();
});
// middleware post hook
usersSchema.post('save', function (doc, next) {
  // console.log(this, 'post hook saved the data');
  doc.password = '';
  next();
});
export const UserModel = model<TUser>('User', usersSchema);
