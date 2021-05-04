import {Products} from './Products';
//Order Table
export class Orders
{
    id: number;
     UserEmail: string;
     Products:Products[];
     CustomerUserEmail: string;
     CustomerName: string
     ShippingAddress: string;
     PhoneNumber: number
     Pincode: number;
     State: string;
     City: string;
     OrderDate:Date;
}