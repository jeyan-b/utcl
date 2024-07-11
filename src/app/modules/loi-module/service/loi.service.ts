import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { error } from 'console';
import { ErrorHandlerService } from '../../../shared/services/ErrorHandler.service';
import { LoiServiceUrls } from '../../../core/constants/service-url-constants';

@Injectable({
  providedIn: 'root',
})
export class LoiService {
  constructor(
    private http: HttpClient,
    private errorHandlerSvc: ErrorHandlerService
  ) {}


  private _postAgency(): string {
    return LoiServiceUrls.postAgencyTokens;
  }
  
  postAgency(payload) {
    let _url = this._postAgency();
    return this.http
      .post(_url, payload)
      .pipe(catchError((error) => this.errorHandlerSvc.handleError(error)));
  }
}
