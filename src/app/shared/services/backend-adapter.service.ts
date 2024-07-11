import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendAdapterService {
  constructor(private httpClient: HttpClient) {}

  executeServiceCall(reqURL: string, restServiceRequest: any, header) {
    return this.httpClient.post<any>(reqURL, restServiceRequest, {
      headers: header,
      responseType: 'text' as 'json',
    });
  }
}
