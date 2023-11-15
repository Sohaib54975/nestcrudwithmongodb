import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { CreateTaskDto } from './../dto/create-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    CreateTask(response: any, createTaskDto: CreateTaskDto): Promise<any>;
    getTasks(response: any): Promise<any>;
    updateTask(response: any, taskId: string, updateTaskDto: UpdateTaskDto): Promise<any>;
    getTask(response: any, taskId: string): Promise<any>;
    deleteTask(response: any, taskId: string): Promise<any>;
}
