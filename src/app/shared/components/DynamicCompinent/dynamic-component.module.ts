import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentRoutes } from './dynamic-component.routing';
import { DynamicCompComponent } from './component/dynamic-comp.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DynamicCompComponent],
  imports: [
    CommonModule,
    DynamicComponentRoutes,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicCompComponent
  ]
})
export class DynamicCompinentModule { }
