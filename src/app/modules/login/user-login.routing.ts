import { Routes, RouterModule } from '@angular/router';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  { path: '', component:UserComponentComponent },
];

export const UserLoginRoutes = RouterModule.forChild(routes);
