import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoiModuleComponent } from './loi-module.component';
import { LoiModuleRoutes } from './loi-module.routing';
import { WidgetComponentsModule } from '../../shared/spinner-widget-component/spinner-widget-components.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LoiModuleRoutes
  ],
  declarations: [LoiModuleComponent]
})
export class LoiModuleModule { }
