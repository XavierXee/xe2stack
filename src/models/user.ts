import { Document } from "mongoose";
import { IUser } from "../interfaces/i_user";

export interface IUserModel extends IUser, Document {
  //custom methods for your model would be defined here
}