import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schema/task.schema';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';


// Modules are containers for different parts of an application, such as controllers, services, and other related components. They serve as a way to organize and encapsulate the functionality of an application.

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sohaib54975:4VREKPeLZniYlhc3@cluster0.ptolpyi.mongodb.net/',
      { dbName: 'toDoCrud' },
      ),
      // feature module that includes a Mongoose model and its corresponding schema.
      MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]), 
  ],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})
export class AppModule { }
