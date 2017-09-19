import { Document } from "mongoose";
import { IData } from "../interfaces/i_data";

export interface IDataModel extends IData, Document {

}