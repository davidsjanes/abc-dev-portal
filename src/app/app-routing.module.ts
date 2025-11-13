import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageComponent } from './components/pages/page/page.component';
import { LoginComponent } from './components/pages/landing/login/login.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { AccountComponent } from './components/pages/account/account.component';
import { LoginFullComponent } from './components/pages/landing/login-full/login-full.component';
import { LinkAccountsComponent } from './components/pages/landing/link-accounts/link-accounts.component';
import { OrgSelectComponent } from './components/pages/landing/org-select/org-select.component';
import { OrgCodeComponent } from './components/pages/landing/org-code/org-code.component';
import { SignupformComponent } from './components/pages/landing/signupform/signupform.component';
import { AdminComponent } from './components/pages/admin/admin.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/signup', 
    pathMatch: 'full'
  },
  {
    path: 'signup', 
    component: LandingComponent,
    children: [
      {
        path: '',
        outlet: 'login',
        component: LoginComponent
      },
      {
        path: 'login',
        outlet: 'login',
        component: LoginComponent
      },
      {
        path: 'login-full',
        outlet: 'login',
        component: LoginFullComponent
      },
      {
        path: 'link-accounts',
        outlet: 'login',
        component: LinkAccountsComponent
      },
      {
        path: 'org-select',
        outlet: 'login',
        component: OrgSelectComponent
      },
      {
        path: 'org-code',
        outlet: 'login',
        component: OrgCodeComponent
      },
      {
        path: 'org-form',
        outlet: 'login',
        component: SignupformComponent
      }
    ]
  },
  { path: 'page', 
    component: PageComponent, 
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        outlet: 'page',
        component: HomeComponent
      },
      {
        path: 'admin',
        outlet: 'page',
        component: AdminComponent
      },
      {
        path: 'account',
        outlet: 'page',
        component: AccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
