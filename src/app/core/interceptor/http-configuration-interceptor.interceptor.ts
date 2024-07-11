import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { GlobalSharedService } from '../services/global-shared.service';
import { catchError, throwError } from 'rxjs';

export const httpConfigurationInterceptorInterceptor: HttpInterceptorFn = (
  req,
  next
) => {
  let httpsReq: any;
  console.log('req.url.indexOf("https:") ', req.url.indexOf('https:')+' req.url ', req.url);
  if (
    req.url.indexOf('https:') === -1 &&
    req.url.indexOf('http:') === -1 &&
    req.url.indexOf('assets') === -1 &&
    req.url !== 'user/login' && req.url !== 'user/refreshToken'
  ) {
    httpsReq = req.clone({
      url: GlobalSharedService.APIURL + req.url,
      setHeaders: {
        Authorization: `Bearer ${GlobalSharedService.ACCESSTOKEN}`,
      },
    });
  } else if (
    req.url.indexOf('https:') === -1 &&
    req.url.indexOf('http:') === -1 &&
    req.url.indexOf('assets') === -1
  ) {
    httpsReq = req.clone({
      url: GlobalSharedService.APIURL + req.url,
    });
  } else {
    httpsReq = req;
  }
  return next(httpsReq);
};
