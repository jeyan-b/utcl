import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDetailComponent } from './components/chart-detail/chart-detail.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { LoiDetailsComponent } from './components/loi-details/loi-details.component';


@NgModule({
  declarations: [
    ChartDetailComponent,
    LoiDetailsComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ]
})
export class SharedModule { }
