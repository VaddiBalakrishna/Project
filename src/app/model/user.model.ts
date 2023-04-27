import { Customer } from "./customer.model";
import { Employee } from "./employee.model";

export class User{
    id?: number;
    username?: string;
    password?: string;
    role?: string;
    customer?: Customer;
    employee?: Employee;
  }