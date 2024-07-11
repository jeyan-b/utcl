import { ErrorHandlerService } from './../../../shared/services/ErrorHandler.service';
import { Injectable } from '@angular/core';
import { LoginServiceUrls } from '../../../core/constants/service-url-constants';
import { AuthGuardService } from '../../../shared/services/auth-guard.service';
import { catchError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { LoginData } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private errorHandlerSrc: ErrorHandlerService
  ) {}

  private _getUserLoggedIn(): string {
    return LoginServiceUrls.getloginTokens;
  }

  getUserLoggedIn(obj: LoginData) {
    let _url = this._getUserLoggedIn();
    return this.http.post<any>(_url, obj);
  }
}
