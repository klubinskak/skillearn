import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CourseModel } from '../../../models/course';
import { CourseService } from '../../../services/course.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { KnobModule } from 'primeng/knob';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { dateChangeSignal } from '../../../services/signals.service';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, CalendarModule, FormsModule, ChartModule, CommonModule,  RouterModule, CarouselModule, TagModule, KnobModule, SchedulerComponent, MatNativeDateModule, MatCardModule, MatDatepickerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  courses: CourseModel[] = [];
  selectedDate: Date  = new Date();

  responsiveOptions: any[] | undefined;

  procentages: number = 40;

  constructor(private courseService: CourseService) {

  }
  ngOnInit(): void {
    this.loadData();

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];  
  }

  loadData() {
    this.courseService.getTopCourses(6).subscribe((res) => {
      this.courses = res;
    })
  }


  onDateChange(): void {
    dateChangeSignal.set(this.selectedDate);
  }

}
