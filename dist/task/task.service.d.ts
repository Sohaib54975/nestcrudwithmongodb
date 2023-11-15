import { UpdateTaskDto } from './../dto/update-task.dto';
import { CreateTaskDto } from './../dto/create-task.dto';
import { Model } from 'mongoose';
import { ITask } from 'src/interface/task.interface';
export declare class TaskService {
    private taskModel;
    constructor(taskModel: Model<ITask>);
    createTask(createTaskDto: CreateTaskDto): Promise<ITask>;
    getAllTask(): Promise<ITask[]>;
    getTask(taskId: string): Promise<ITask>;
    deleteTask(taskId: string): Promise<ITask>;
    updateTask(taskId: string, updateTaskDto: UpdateTaskDto): Promise<ITask>;
}
