import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicCompinentModule } from '../../shared/components/DynamicCompinent/dynamic-component.module';
import { Test1RoutingModule } from './Test1.routing';
import { Test1Component } from './comonents/test1/Test1.component';

@NgModule({
  imports: [
    CommonModule,
    Test1RoutingModule,
    DynamicCompinentModule
  ],
  declarations: [Test1Component]
})
export class Test1Module { }
