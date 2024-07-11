//import { MatDialogModule } from './../../shared/ui/mat-dialog/mat-dialog.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { MatDialogModule } from '../../shared/ui/singleDropdown/singleDropdown.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TestRoutingModule, MatDialogModule]
})
export class TestModule {}
