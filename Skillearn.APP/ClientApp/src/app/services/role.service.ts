import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleModel } from '../models/role';
import { environment } from '../../environments/environment';
import { Observable, catchError, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(public httpClient: HttpClient) {
  }

  public getAllRoles(): Observable<RoleModel[]> {
    return this.httpClient.get<RoleModel[]>(environment.apiBaseUrl + `/role/getAllRoles`).pipe(
      catchError((err: any) => {
        console.log('Error:', err);
        /* this.sharedService.handleError(err);*/
        return new Observable<RoleModel[]>((subscriber) => {
          subscriber.next(undefined);
        });
      }), finalize(() => {

      })
    )
  }
}
