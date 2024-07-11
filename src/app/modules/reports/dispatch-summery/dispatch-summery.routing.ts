import { Routes, RouterModule } from '@angular/router';
import { DispatchSummeryComponent } from './dispatch-summery.component';

const routes: Routes = [
  { path: '', component: DispatchSummeryComponent },
];

export const DispatchSummeryRoutes = RouterModule.forChild(routes);
