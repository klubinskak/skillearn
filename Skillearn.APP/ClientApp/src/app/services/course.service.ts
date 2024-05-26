import { Injectable } from '@angular/core';
import { CourseModel } from '../models/course';
import { SharedService } from './shared.service';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, finalize } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public httpClient: HttpClient, public sharedService: SharedService) {
  }

  public getTopCourses(limit: number): Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(environment.apiBaseUrl + `/course/getTopCourses/${limit}`).pipe(
      catchError((err: any) => {
        console.log('Error:', err);
        /* this.sharedService.handleError(err);*/
        return new Observable<CourseModel[]>((subscriber) => {
          subscriber.next(undefined);
        });
      }), finalize(() => {

      })
    )
  }
  
  public getAllCourses(): Observable<CourseModel[]> {
    return this.httpClient.get<CourseModel[]>(environment.apiBaseUrl + `/course/getAllCourses`).pipe(
      catchError((err: any) => {
        console.log('Error:', err);
        /* this.sharedService.handleError(err);*/
        return new Observable<CourseModel[]>((subscriber) => {
          subscriber.next(undefined);
        });
      }), finalize(() => {

      })
    )
  }
  
  public getCourseDetail(courseId: number): Observable<CourseModel> {
    return this.httpClient.get<CourseModel>(environment.apiBaseUrl + `/course/getCourseDetail/${courseId}`).pipe(
      catchError((err: any) => {
        console.log('Error:', err);
        /* this.sharedService.handleError(err);*/
        return new Observable<CourseModel>((subscriber) => {
          subscriber.next(undefined);
        });
      }), finalize(() => {

      })
    )
  }
}
