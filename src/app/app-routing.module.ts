import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: "full",
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/user-login.module').then((m) => m.UserLoginModule),
  },
  {
    path: 'core',
    loadChildren: () =>
      import('./modules/core/core.module').then((m) => m.CoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
