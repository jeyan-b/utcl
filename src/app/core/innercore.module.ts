import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb/breadcrumb.component';
import { GeneralTableComponent } from './components/general-table/general-table.component';
import { HeaderComponent } from './components/header/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ChartDetailComponent } from './components/chart-detail/chart-detail.component';

@NgModule({
  declarations: [
    NavBarComponent,
    GeneralTableComponent,
    HeaderComponent,
    BreadcrumbComponent,
    ChartDetailComponent,
  ],
  imports: [CommonModule, MaterialComponentsModule],
  exports: [
    NavBarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    GeneralTableComponent,
  ],
})
export class InnerCoreModule {}
