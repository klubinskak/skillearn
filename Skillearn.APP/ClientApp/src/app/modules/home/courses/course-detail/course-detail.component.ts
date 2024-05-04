import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CourseModel } from '../../../../models/course';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CourseCardComponent } from '../components/course-card/course-card.component';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CardModule, TagModule, RatingModule, CommonModule, FormsModule, ButtonModule, CourseCardComponent],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {
  courseId = 0;
  courseDetail: CourseModel = new CourseModel();

  value!: number;

  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      console.log('params??', params)
      // Access the ':id' parameter
      this.courseId = params['id'];
      console.log('Courseid:', this.courseId)
      // Now you can use this.courseId in your component
    });
    this.loadData();
  }
  loadData() {
    this.courseService.getCourseDetail(this.courseId).subscribe((res) => {
      if (res) {
        this.courseDetail = res;
      }
    })
  }
}
