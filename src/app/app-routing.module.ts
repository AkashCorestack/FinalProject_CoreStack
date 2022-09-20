import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompComponent } from './add-comp/add-comp.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SignupComponent } from './signup/signup.component';
import { TestALlDummyProjectComponent } from './test-all-dummy-project/test-all-dummy-project.component';

const routes: Routes = [
  {
    path: '',
    component: LoginSignupComponent,
    //component: AddCompComponent
  },
  {
    path: 'home',
    component: MainContentComponent,
  },
  {
    path: 'login',
    component: LoginSignupComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
