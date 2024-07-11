import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { GeneralTableRoutingModule } from './general-table-routing.module';
import { MaterialComponentsModule } from '../../../shared/material-components/material-components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, GeneralTableRoutingModule, MatButtonModule, MaterialComponentsModule],
})
export class GeneralTableModule {}
