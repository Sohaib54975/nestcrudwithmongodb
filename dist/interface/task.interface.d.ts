import { Document } from "mongoose";
export interface ITask extends Document {
    readonly name: string;
    readonly disc: string;
    readonly priority: string;
    readonly assignee: string;
    readonly creater: string;
    readonly status: string;
    readonly startDate: string;
    readonly dueDate: string;
}
