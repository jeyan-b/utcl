import { Component, OnInit } from '@angular/core';
import { GlobalSharedService } from '../../core/services/global-shared.service';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-widget-components.component.html',
  styleUrls: ['./spinner-widget-components.component.css']
})
export class WidgetComponentsComponent implements OnInit {

  public active: boolean;
  constructor(private globalSharedSrv: GlobalSharedService) { }

  ngOnInit() {
    this.globalSharedSrv.isSpinnerActive.subscribe((res) =>{
      this.active = res;
    });
  }

 
  disableRightClick(event) {
		event.preventDefault();
	}

}
