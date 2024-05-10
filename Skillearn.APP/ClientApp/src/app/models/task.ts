export class TaskModel {
    id: number = 0;
    title: string = '';
    description: string = '';
    isDone: boolean = false;
    date: Date = new Date();
    userId: number = 0;
    entity: string = '';
  }