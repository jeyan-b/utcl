import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogComponent } from './singleDropdown.component';
import { SingleDropdownModule } from './singleDropdown.routing.module';



@NgModule({
  declarations: [
    MatDialogComponent
  ],
  imports: [
    CommonModule,
    SingleDropdownModule
  ],
  exports: [
    MatDialogComponent
  ]
})
export class MatDialogModule { }
