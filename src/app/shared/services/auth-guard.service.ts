import { Injectable } from '@angular/core';
import { GlobalSharedService } from '../../core/services/global-shared.service';
import { BackendAdapterService } from './backend-adapter.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(
    private globalSharedSvc: GlobalSharedService,
    private backendAdapterSvc: BackendAdapterService
  ) {}
  callToAPI(data: any, url: string) {
    return this.backendAdapterSvc.executeServiceCall(
      url,
      data,
      this.globalSharedSvc.getJWTHeaderURLEncoded()
    );
  }
}
