import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralTableComponent } from './general-table.component';

const routes: Routes = [
  { path : "", component: GeneralTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralTableRoutingModule { }
