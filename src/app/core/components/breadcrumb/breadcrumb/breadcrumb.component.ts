import { Component, OnInit } from '@angular/core';
import { GlobalSharedService } from '../../../services/global-shared.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  path!: string;
  pageTitle!: string;
  constructor(private globalSharedServ: GlobalSharedService) {
    this.globalSharedServ.currentPath.subscribe((data) => {
      this.path = data.toUpperCase();
    });

    this.globalSharedServ.pageTitle.subscribe((data) => {
      console.log("this.pageTitle ",this.pageTitle)
      this.pageTitle = data;
    })
  }

  ngOnInit() {}
}
