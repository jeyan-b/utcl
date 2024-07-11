import { Injectable } from '@angular/core';
import { AuthGuardService } from '../../../shared/services/auth-guard.service';
import { DashboardServiceUrls } from '../../../core/constants/service-url-constants';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { error } from 'console';
import { ErrorHandlerService } from '../../../shared/services/ErrorHandler.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private errorHandlerSvc: ErrorHandlerService
  ) {}

  private _getData(): string {
    return DashboardServiceUrls.getDetails;
  }

  //Testing purpose service
  private _getAllUsers(): string {
    return DashboardServiceUrls.getAllUsers;
  }

  callTempSrv(data: any) {
    let _url = this._getData().replace('name', data);
    return this.http
      .get(_url)
      .pipe(catchError((error) => this.errorHandlerSvc.handleError(error)));
  }

  getUserData() {
    let _url = this._getAllUsers();
    return this.http
      .get(_url)
      .pipe(catchError((error) => this.errorHandlerSvc.handleError(error)));
  }
}
