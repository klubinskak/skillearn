import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskModel } from '../../../../../models/Task';

@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})
export class SchedulerComponent implements OnInit{
  public tasks: TaskModel[] = [
    { id: 1, title: 'Task 1', description: 'Description for Task 1', isDone: true, date: new Date(), entity: 'IT', userId: 1 },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', isDone: false, date: new Date(), entity: 'HR', userId: 2 },
    // Add more tasks as needed
  ];
  hours: string[] = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
  
  
    ngOnInit(): void {
    console.log('Hours?', this.hours)
  }
  
}
