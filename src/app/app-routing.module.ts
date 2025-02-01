import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PageComponent } from './components/pages/page/page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { AccountComponent } from './components/pages/account/account.component';
import { DocumentationComponent } from './components/pages/documentation/documentation.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: '/signup', 
    pathMatch: 'full'
  },
  {
    path: 'signup', 
    component: LandingComponent
  },
  {
    path: 'login', 
    component: LoginComponent
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
      path: 'account',
      outlet: 'page',
      component: AccountComponent
    },
    {
      path: 'documentation',
      outlet: 'page',
      component: DocumentationComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
