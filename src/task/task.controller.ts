import { UpdateTaskDto } from 'src/dto/update-task.dto';
import { CreateTaskDto } from './../dto/create-task.dto';
import { TaskService } from './task.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

//Decolarater :: a decorator is a special kind of declaration that can be attached to a class declaration, method, property, or parameter to provide additional metadata or modify the behavior of the target.

//Controller :: responsible for handling incoming HTTP requests and providing responses.

@Controller('task')
export class TaskController {
  // is a shorthand syntax provided by TypeScript (and some other languages) to initialize taskService
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async CreateTask(@Res() response, @Body() createTaskDto: CreateTaskDto) {
    try {
      const newTask = await this.taskService.createTask(createTaskDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Task has been created successfully',
        newTask,
      });
    } catch (error) {
      response.status(HttpStatus.BAD_REQUEST).json(
        {
          statusCode: 400,
          message: 'Error: Task not created!',
          error: 'Bad Request',
        },
        response.error,
      );
    }
  }

  @Get()
  async getTasks(@Res() response) {
    try {
      const allTaskData = await this.taskService.getAllTask();
      return response.status(HttpStatus.OK).json({
        message: 'All Tasks data found successfully',
        allTaskData,
      });
    } catch (error) {
      return response
        .status(error.status)
        .json({ Mesage: 'Error in Fetching All Tasks' }, error.response);
    }
  }

  @Put('/:id')
  async updateTask(
    @Res() response,
    @Param('id') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    try {
      const updatedTask = await this.taskService.updateTask(
        taskId,
        updateTaskDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Task has been successfully updated',
        updatedTask,
      });
    } catch (error) {
      return response
        .status(error.status)
        .json(
          { Mesage: 'Error in Updating this Particular Task' },
          error.response,
        );
    }
  }

  @Get('/:id')
  async getTask(@Res() response, @Param('id') taskId: string) {
    try {
      const fetchedTask = await this.taskService.getTask(taskId);
      return response.status(HttpStatus.OK).json({
        message: 'Task found successfully',
        fetchedTask,
      });
    } catch (error) {
      return response
        .status(error.status)
        .json(
          { Mesage: 'Error in Fetching this Particular Task' },
          error.response,
        );
    }
  }

  @Delete('/:id')
  async deleteTask(@Res() response, @Param('id') taskId: string) {
    try {
      const deletedTask = await this.taskService.deleteTask(taskId);
      return response.status(HttpStatus.OK).json({
        message: 'Task Deleted successfully',
        deletedTask,
      });
    } catch (error) {
      return response
        .status(error.status)
        .json({ Mesage: 'Error in Deleting this Task' }, error.response);
    }
  }
}
