import { Component, OnInit,  inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SchedulerComponent } from '../../dashboard/components/scheduler/scheduler.component';
import { DataViewModule } from 'primeng/dataview';
import { SkeletonModule } from 'primeng/skeleton';
import { CourseModel } from '../../../../models/course';
import { CourseService } from '../../../../services/course.service';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

type LayoutType = "list" | "grid";

@Component({
  selector: 'app-courses-listing',
  standalone: true,
  imports: [CommonModule, ButtonModule, SchedulerComponent, DataViewModule, SkeletonModule, TagModule, CardModule],
  templateUrl: './courses-listing.component.html',
  styleUrl: './courses-listing.component.scss'
})
export class CoursesListingComponent implements OnInit{
  layout: LayoutType = "list";
  courses: CourseModel[] = [];

  isLoading = true;

  constructor(private courseService: CourseService){

  }

  ngOnInit(): void {
    this.loadData();
  }

  
  loadData() {
    this.courseService.getAllCourses().subscribe((res: CourseModel[]) => {
      if(res){
        this.isLoading = false;
        this.courses = res;
      }
    })
  }

  counterArray(n: number): any[] {
    return Array(n);
  }

  isNewItem(createdAt: string): boolean {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    return createdDate.getMonth() === currentDate.getMonth() && 
           createdDate.getFullYear() === currentDate.getFullYear();
  } 

}
