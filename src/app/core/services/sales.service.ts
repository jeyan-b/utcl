import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private _http:HttpClient) { }

  getSalesData(){
    return this._http.get('http://localhost:3000/sales')
  }

  getSalesBarData(){
    return this._http.get('http://localhost:3000/salesBar')
  }
}
