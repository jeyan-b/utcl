import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  AppSettings,
  SnackBarConfig,
} from '../../../app-constants/appSettings';
import { GlobalSharedService } from '../../../core/services/global-shared.service';
import { LoginService } from '../service/login.service';
import { LoginData } from '../models/login.model';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss'],
})
export class UserComponentComponent implements OnInit {
  loginPayload: LoginData;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = SnackBarConfig.snackDuration;

  constructor(
    private router: Router,
    private titleSvc: Title,
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private _globalSrv: GlobalSharedService
  ) {
    this.titleSvc.setTitle(AppSettings.applicationName + '- Login');
    this._globalSrv.sessionExpiry.subscribe((data) => {
      if (data) {
        this._snackBar.open(data, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds,
        });
      }
    });
  }

  ngOnInit() {}

  onLoginClick() {
    this.loginPayload = new LoginData();
    this.loginPayload = {
      password: 'asdf12',
      username: 'pravin12',
    };
    this.router.navigate(['/core/dashboard']);
    // this.getUserLogged();
  }

  getUserLogged() {
    this.loginService.getUserLoggedIn(this.loginPayload).subscribe({
      next: (response) => {
        this._globalSrv.setAccessToken(response.accessToken);
        this._globalSrv.setRefreshToken(response.refreshToken);
        this.router.navigate(['/core/dashboard']);
      },
      error: (error: any) => {
        console.log(error, 'Error in call');
        this._snackBar.open(error.statusText, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds,
        });
      },
    });
  }
}
