 import { Document } from "mongoose";
 
//  In Nest.js, interfaces are used to define the shape of data objects or entities within the application. 
// They are a TypeScript feature that helps enforce a contract or structure for classes, functions, or other objects. 
// When it comes to Nest.js, interfaces are commonly used in the context of DTOs (Data Transfer Objects), models, and other structures that represent data.

export interface ITask extends Document{
    readonly name: string;
    readonly disc: string;
    readonly priority: string;
    readonly assignee: string;
    readonly creater: string;
    readonly status: string;
    readonly startDate: string;
    readonly dueDate: string;
}