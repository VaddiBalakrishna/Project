import { Customer } from "./customer.model";
import { User } from "./user.model";


export class CustomerDocuments{
    id?: number;
    aadharNumber?: string;
    panNumber?: string;
    user?: User;
    customer?: Customer;

}