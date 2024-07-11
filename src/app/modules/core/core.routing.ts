import { RouterModule, Routes } from '@angular/router';
import { CoreComponentComponent } from './core-component/core-component.component';

const routes: Routes = [
  {
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'test',
        loadChildren: () =>
          import('../Test1/Test1.module').then((m) => m.Test1Module),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('../reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'loi',
        loadChildren:() =>
          import('../loi-module/loi-module.module').then((m)=>m.LoiModuleModule)
      }
    ],
    path: '',
    component: CoreComponentComponent,
  },
];

export const CoreRoutes = RouterModule.forChild(routes);
