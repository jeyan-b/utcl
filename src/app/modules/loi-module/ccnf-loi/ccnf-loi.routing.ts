import { Routes, RouterModule } from '@angular/router';
import { CcnfLoiComponent } from './ccnf-loi.component';

const routes: Routes = [
  { path: '', component: CcnfLoiComponent },
];

export const CcnfLoiRoutes = RouterModule.forChild(routes);
