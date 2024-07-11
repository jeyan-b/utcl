import { Routes, RouterModule } from '@angular/router';
import { DynamicCompComponent } from './component/dynamic-comp.component';

const routes: Routes = [
  { path:'' , component: DynamicCompComponent },
];

export const DynamicComponentRoutes = RouterModule.forChild(routes);
