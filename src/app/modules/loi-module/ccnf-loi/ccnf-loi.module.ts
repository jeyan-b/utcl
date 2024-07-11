import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CcnfLoiComponent } from './ccnf-loi.component';
import { CcnfLoiRoutes } from './ccnf-loi.routing';
import { MaterialComponentsModule } from '../../../shared/material-components/material-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../shared/shared.module';
import { WidgetComponentsModule } from '../../../shared/spinner-widget-component/spinner-widget-components.module';

@NgModule({
  imports: [
    CommonModule,
    CcnfLoiRoutes,
    MaterialComponentsModule,
    ReactiveFormsModule,
    WidgetComponentsModule
  ],
  declarations: [CcnfLoiComponent]
})
export class CcnfLoiModule { }
