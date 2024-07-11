import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchSummeryRoutes } from './dispatch-summery.routing';
import { DispatchSummeryComponent } from './dispatch-summery.component';
import { InnerCoreModule } from "../../../core/innercore.module";
import { MaterialComponentsModule } from '../../../shared/material-components/material-components.module';

@NgModule({
    declarations: [DispatchSummeryComponent],
    imports: [CommonModule, DispatchSummeryRoutes, InnerCoreModule, MaterialComponentsModule]
})
export class DispatchSummeryModule {}
