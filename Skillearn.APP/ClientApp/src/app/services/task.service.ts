import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task';
import { Observable, catchError, finalize } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(public httpClient: HttpClient) {
  }

  public getTasks(dateTime: string): Observable<TaskModel[]> {
    return this.httpClient.get<TaskModel[]>(environment.apiBaseUrl + `/task/getTasks/${dateTime}`).pipe(
      catchError((err: any) => {
        console.log('Error:', err);
        /* this.sharedService.handleError(err);*/
        return new Observable<TaskModel[]>((subscriber) => {
          subscriber.next(undefined);
        });
      }), finalize(() => {

      })
    )
  }
}
