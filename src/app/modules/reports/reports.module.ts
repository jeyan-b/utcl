import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InnerCoreModule } from '../../core/innercore.module';
import { ReportsComponent } from './reports.component';
import { ReportsRoutes } from './reports.routing';

@NgModule({
  imports: [CommonModule, ReportsRoutes, InnerCoreModule],
  declarations: [ReportsComponent],
})
export class ReportsModule {}
