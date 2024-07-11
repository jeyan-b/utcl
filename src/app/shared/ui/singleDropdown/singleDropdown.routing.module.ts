import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogComponent } from './singleDropdown.component';


const routes: Routes = [
  {
    path: '',
    component: MatDialogComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleDropdownModule {}
