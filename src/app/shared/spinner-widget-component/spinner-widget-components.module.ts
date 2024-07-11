import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponentsRoutes } from './spinner-widget-components.routing';
import { WidgetComponentsComponent } from './spinner-widget-components.component';


@NgModule({
  imports: [
    CommonModule,
    // WidgetComponentsRoutes
  ],
  declarations: [WidgetComponentsComponent],
  exports: [WidgetComponentsComponent]
})
export class WidgetComponentsModule { }
