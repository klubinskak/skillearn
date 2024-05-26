import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from '../../../../../models/task';
import { Observable } from 'rxjs';
import {toObservable} from '@angular/core/rxjs-interop'
import { dateChangeSignal } from '../../../../../services/signals.service';
import { TaskService } from '../../../../../services/task.service';
import { DateTime } from 'luxon';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

type Position = "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright";


@Component({
  selector: 'app-scheduler',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule],
  templateUrl: './scheduler.component.html',
  styleUrl: './scheduler.component.scss'
})


export class SchedulerComponent implements OnInit{

  private dateChangeSignal$: Observable<Date> = toObservable(dateChangeSignal);

  selectedDate: string = '';
  public tasks: TaskModel[] = [];
  hours: string[] = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  visible: boolean = false;
  position: Position = "bottomright"
  selectedHour = ''

  constructor(private taskService: TaskService) {

  }
  
  
    ngOnInit(): void {
      this.dateChangeSignal$.subscribe((res) => {
        this.selectedDate = DateTime.fromJSDate(res).toFormat('yyyy-MM-dd');
        this.loadData();
      })
      this.dateChangeSignal$.subscribe((date) => {
        console.log(date);
      })
    }

    showDialog(position: Position, selectedHour: string) {
      this.selectedHour = selectedHour;
      this.position = position;
      this.visible = true;
  }

    loadData(){
      this.taskService.getTasks(this.selectedDate).subscribe((res) => {
        this.tasks = res;
        console.log('Res', this.tasks);
      })
    }  

    getTasksForHour(hour: string) {
      return this.tasks.filter(task => {
        return task.startTime.includes(hour); // Filter tasks with startTime matching the specified hour
      });
      
    }
  
}
