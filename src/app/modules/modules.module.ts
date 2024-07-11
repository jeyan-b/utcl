import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from '../shared/material-components/material-components.module';
import { InnerCoreModule } from './../core/innercore.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule, InnerCoreModule, MaterialComponentsModule]
})
export class ModulesModule {}
