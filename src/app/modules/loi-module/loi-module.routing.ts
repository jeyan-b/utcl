import { Routes, RouterModule } from '@angular/router';
import { LoiModuleComponent } from './loi-module.component';

const routes: Routes = [
  {
    children: [
      {
        path: 'ccnf-loi',
        loadChildren: () =>
          import('../loi-module/ccnf-loi/ccnf-loi.module').then(
            (m) => m.CcnfLoiModule
          ),
      },
    ],
    path: '',
    component: LoiModuleComponent,
  },
];

export const LoiModuleRoutes = RouterModule.forChild(routes);
