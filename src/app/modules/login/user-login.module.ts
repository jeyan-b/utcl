import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from '../../shared/material-components/material-components.module';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserLoginRoutes } from './user-login.routing';


@NgModule({
  declarations: [UserComponentComponent],
  imports: [
    CommonModule,
    UserLoginRoutes,
    MaterialComponentsModule,
    
  ]
})
export class UserLoginModule { }
