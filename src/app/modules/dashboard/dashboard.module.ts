import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from './dashboard.routing';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';


@NgModule({
  imports: [CommonModule, DashboardRoutes, MaterialComponentsModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
