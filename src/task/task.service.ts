/* eslint-disable prettier/prettier */
import { UpdateTaskDto } from './../dto/update-task.dto';
import { CreateTaskDto } from './../dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITask } from 'src/interface/task.interface';

@Injectable()
export class TaskService {
  // This type is typically provided by Mongoose and represents the Mongoose model associated with a MongoDB collection. 
  // The <ITask> is a TypeScript generic parameter specifying the shape of the documents that this model will handle (based on the ITask interface).
  constructor(@InjectModel('Task') private taskModel: Model<ITask>) { }

  // Create the new Task
  async createTask(createTaskDto: CreateTaskDto): Promise<ITask> {
    const newTask = await new this.taskModel(createTaskDto);
    return newTask.save();
  }

  //   Get All the Taks 
  async getAllTask(): Promise<ITask[]> {
    const taskData = await this.taskModel.find();
    if (!taskData || taskData.length == 0) {
      throw new NotFoundException('Task data not found!');
    }
    return taskData;
  }

  //   Get the Task against particular Id
  async getTask(taskId: string): Promise<ITask> {
    const existingTask = await this.taskModel.findById(taskId).exec();
    if (!existingTask) {
      throw new NotFoundException(`Task #${taskId} not found`);
    }
    return existingTask;
  }

  //   Delete the Task against particular Id
  async deleteTask(taskId: string): Promise<ITask> {
    const deletedTask = await this.taskModel.findByIdAndDelete(taskId);
    if (!deletedTask) {
      throw new NotFoundException(`Task #${taskId} not found`);
    }
    return deletedTask;
  }

  //   Update the Task against particular Id
  async updateTask(taskId: string, updateTaskDto: UpdateTaskDto): Promise<ITask> {
    const existingTask = await this.taskModel.findByIdAndUpdate(taskId, updateTaskDto, { new: true },
    );
    if (!existingTask) {
      throw new NotFoundException(`Task #${taskId} not found`);
    }

    return existingTask;
  }
}
