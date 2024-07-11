import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { GlobalSharedService } from '../../../core/services/global-shared.service';

@Component({
  selector: 'app-core-component',
  templateUrl: './core-component.component.html',
  styleUrls: ['./core-component.component.css'],
})
export class CoreComponentComponent implements OnInit, OnDestroy {
  routerSubscription: Subscription;

  constructor(
    private router: Router,
    private globalSharedServ: GlobalSharedService
  ) {}

  ngOnInit() {
    this.getCurrentPath();
    this.globalSharedServ.pageTitle.next('Dashboard');
  }

  getCurrentPath(): void {
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let subStr = event.urlAfterRedirects;
        this.globalSharedServ.currentPath.next(subStr.slice(6, subStr.length));
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
