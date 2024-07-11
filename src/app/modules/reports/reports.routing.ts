import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  {
    children: [
      {
        path: 'dispatch-summery',
        loadChildren: () =>
          import('../reports/dispatch-summery/dispatch-summery.module').then(
            (m) => m.DispatchSummeryModule
          ),
      },
    ],
    path: '',
    component: ReportsComponent,
  },
];

export const ReportsRoutes = RouterModule.forChild(routes);
