import { HttpClient } from '@angular/common/http';
import { GlobalSharedService } from './core/services/global-shared.service';
import { LoggerServiceService } from './core/services/logger-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'UTCL';
  test = 'Test';

  constructor(
    public logSrv: LoggerServiceService,
    public globalSharedSvc: GlobalSharedService,
    private http: HttpClient
  ) {
    this.globalSharedSvc.getAPIURL();
  }
  ngOnInit(): void {}
}
