import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './comonents/test1/Test1.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: Test1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Test1RoutingModule {}
