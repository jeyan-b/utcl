import { Routes, RouterModule } from '@angular/router';
import { WidgetComponentsComponent } from './spinner-widget-components.component';

const routes: Routes = [
  { path: '', component: WidgetComponentsComponent },
];

export const WidgetComponentsRoutes = RouterModule.forChild(routes);
