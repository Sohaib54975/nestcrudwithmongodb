"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const update_task_dto_1 = require("../dto/update-task.dto");
const create_task_dto_1 = require("./../dto/create-task.dto");
const task_service_1 = require("./task.service");
const common_1 = require("@nestjs/common");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async CreateTask(response, createTaskDto) {
        try {
            const newTask = await this.taskService.createTask(createTaskDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Task has been created successfully',
                newTask,
            });
        }
        catch (error) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Task not created!',
                error: 'Bad Request',
            }, response.error);
        }
    }
    async getTasks(response) {
        try {
            const allTaskData = await this.taskService.getAllTask();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All Tasks data found successfully',
                allTaskData,
            });
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ Mesage: 'Error in Fetching All Tasks' }, error.response);
        }
    }
    async updateTask(response, taskId, updateTaskDto) {
        try {
            const updatedTask = await this.taskService.updateTask(taskId, updateTaskDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Task has been successfully updated',
                updatedTask,
            });
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ Mesage: 'Error in Updating this Particular Task' }, error.response);
        }
    }
    async getTask(response, taskId) {
        try {
            const fetchedTask = await this.taskService.getTask(taskId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Task found successfully',
                fetchedTask,
            });
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ Mesage: 'Error in Fetching this Particular Task' }, error.response);
        }
    }
    async deleteTask(response, taskId) {
        try {
            const deletedTask = await this.taskService.deleteTask(taskId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Task Deleted successfully',
                deletedTask,
            });
        }
        catch (error) {
            return response
                .status(error.status)
                .json({ Mesage: 'Error in Deleting this Task' }, error.response);
        }
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "CreateTask", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getTask", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map