import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InnerCoreModule } from '../../core/innercore.module';
import { CoreComponentComponent } from './core-component/core-component.component';
import { CoreRoutes } from './core.routing';
import { ReportsModule } from '../reports/reports.module';
import { LoiModuleModule } from '../loi-module/loi-module.module';

@NgModule({
  declarations: [CoreComponentComponent],
  imports: [CommonModule, CoreRoutes, InnerCoreModule, ReportsModule, LoiModuleModule],
})
export class CoreModule {}
