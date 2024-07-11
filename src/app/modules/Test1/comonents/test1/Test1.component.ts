import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../../../core/actions/counter-actions';
import { ConfigurationData } from '../../../../shared/components/ConfigurationClasses/ConfigurationData';
import { User1Config } from '../../../../shared/components/User1ConfigClass/User1Config';
import * as data from './../../../../../assets/config/rolewiseConfigs.json';
import { User2Config } from '../../../../shared/components/User2ConfigClass/User2Config';

@Component({
  selector: 'app-Test1',
  templateUrl: './Test1.component.html',
  styleUrls: ['./Test1.component.css'],
})
export class Test1Component implements OnInit {
  items = (data as any).default;
  user1 : any;
  controlsConfig: any;
  count$: Observable<number>;
  loggedInRole: string;

  constructor(private store: Store<{ count: number }>) {
    console.log(this.items);
    this.count$ = store.pipe(select('count'));
    this.loggedInRole = 'user2';
    this.setUser();
  }

  setUser() {
    switch (this.loggedInRole) {
      case 'user1':
        this.user1 = new User1Config();
        this.controlsConfig = this.user1.user1Data;
        break;
      case 'user2':
        this.user1 = new User2Config();
        this.controlsConfig = this.user1.user2Data;
        break;
      default:
        // Default component or handle error
        return null;
    }
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  ngOnInit() {}
}
