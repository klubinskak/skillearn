import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesListingComponent } from './courses/courses-listing/courses-listing.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'courses', component: CoursesListingComponent },
  { path: 'courses/:id', component: CourseDetailComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
