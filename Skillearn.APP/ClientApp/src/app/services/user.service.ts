import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { Observable, catchError, finalize } from 'rxjs';
import { UserModel } from '../models/users';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient, public sharedService: SharedService) {
  }

  public getAllUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(environment.apiBaseUrl + `/user/getAllUsers`).pipe(
      catchError((err: any) => {
        console.log('Error:', err);
       /* this.sharedService.handleError(err);*/
        return new Observable<UserModel[]>((subscriber) => {
          subscriber.next(undefined);
        });
      }), finalize(() => {

      })
    )
  }

  public updateUser(model: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>(environment.apiBaseUrl + `/user/updateUser`, model).pipe(
      catchError((err: any) => {
        console.log('Error:', err);
        /* this.sharedService.handleError(err);*/
        return new Observable<UserModel>((subscriber) => {
          subscriber.next(undefined);
        });
      }), finalize(() => {

      })
    )
  }
}
