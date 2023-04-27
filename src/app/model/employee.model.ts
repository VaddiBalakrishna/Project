import { Admin } from "./admin.model";
import { User } from "./user.model";

export class Employee{
    id?: number;
    name?: string;
    companyName?:string;
    user?: User;
    admin?: Admin;
    username?: User;
  }