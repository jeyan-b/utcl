import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

constructor() { }
handleError(error: HttpErrorResponse): Observable<never> {
  switch (error.status) {
      case 400: {
          return throwError(()=> new Error(`Bad Request ${error.message}`));
      }
      case 401: {
          return throwError(()=> new Error(`Unauthorized user ${error.message}`));
      }
      case 403: {
        return throwError(()=> new Error(`Forbidden ${error.message}`));
      }
      case 404: {
        return throwError(()=> new Error(`Not Found ${error.message}`));
      }
      case 500: {
        return throwError(()=> new Error(`Internal Server Error ${error.message}`));
      }
      default: {
        return throwError(()=> new Error(`Unknown Server Error ${error.message}`));
      }
  }
}
}
