import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { AppServiceUrls } from '../constants/service-url-constants';
// import { error } from 'console';
import { Router } from '@angular/router';
import { ServiceResponseCodes } from '../../app-constants/appSettings';

@Injectable({
  providedIn: 'root',
})
export class GlobalSharedService {
  //Declared vars
  static APIURL: any;
  isSpinnerActive= new BehaviorSubject(false);
  currentPath: BehaviorSubject<string>;
  pageTitle: BehaviorSubject<string>;
  public static ACCESSTOKEN: string;
  public static REFRESHTOKEN: string;
  sessionExpiry:BehaviorSubject<string>

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentPath = new BehaviorSubject('DASHBOARD');
    this.pageTitle = new BehaviorSubject('Dashboard');
    this.sessionExpiry = new BehaviorSubject('');
  }

  //Global shared functions

  private _getRefreshTokens(): string {
    return AppServiceUrls.getRefreshTokens;
  }

  getServiceUrl(): Observable<any> {
    return this.httpClient
      .get('assets/config/config.json')
      .pipe(map((res: any) => res));
  }

  getAPIURL() {
    this.getServiceUrl().subscribe((response: any) => {
      GlobalSharedService.APIURL = response.service_url;
    });
  }

  getJWTHeaderURLEncoded() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Security-Policy': "frame-ancestors 'self'",
    }).set('X-Frame-Options', 'DENY');
    return headers;
  }

  // getIsSpinnerActive() {
  //   return this.isSpinnerActive;
  // }

  // setIsSpinnerActive(active:any) {
  //   this.isSpinnerActive = active;
  // }

  setAccessToken(accessToken: string) {
    GlobalSharedService.ACCESSTOKEN = accessToken;
  }

  getAccessToken(): string {
    return GlobalSharedService.ACCESSTOKEN;
  }

  setRefreshToken(refreshToken: string) {
    GlobalSharedService.REFRESHTOKEN = refreshToken;
  }

  getRefreshToken(): string {
    return GlobalSharedService.REFRESHTOKEN;
  }

  checkErrorStatus(result:any) {
    console.log('In checkErrorStatus result ', result);
    switch (result.code) {
      //Add cases as per requirement
      case '11':
        this.getNewRefreshToken();
        break;
    }
  }

  getNewRefreshToken() {
    let obj = {
      token: this.getRefreshToken(),
    };
    this.getToken(obj).subscribe({
      next: (response) => {
        console.log(response)
        if (response.code == ServiceResponseCodes.One) {
          this.setAccessToken(response.accessToken);
          this.setRefreshToken(response.refreshToken);
        } else if (response.code == ServiceResponseCodes.Twelve) {
          console.log("In refresh 12")
          this.sessionExpiry.next(response.detailedMessage)
          this.router.navigate(['login']);
        }
      },
      error: (error) => {
        console.log('Error in refresh token...');
      },
    });
  }

  getToken(obj: any) {
    let _url = this._getRefreshTokens();
    return this.httpClient.post<any>(_url, obj);
  }
}
