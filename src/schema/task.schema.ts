import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  name: string;
  @Prop()
  disc: string;
  @Prop()
  priority: string;
  @Prop()
  assignee: string;
  @Prop()
  creater: string;
  @Prop()
  status: string;
  @Prop()
  startDate: string;
  @Prop()
  dueDate: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);