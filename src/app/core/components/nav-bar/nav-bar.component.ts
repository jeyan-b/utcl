import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {

  constructor(private route: Router){}
  routeToReport(){
    this.route.navigate(['/core/reports/dispatch-summery'])
  }

  routeToDashboard(){
    this.route.navigate(['/core/dashboard'])
  }

  routeToTest(){
    this.route.navigate(['/core/test'])
  }
  routeToCCNF(){
    this.route.navigate(['/core/loi/ccnf-loi'])
  }
  routeToGodown(){

  }
  routeToHandling(){

  }
}


