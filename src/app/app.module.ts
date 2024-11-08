import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { TopNavComponent } from './components/navigation/top-nav/top-nav.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { SiteNavComponent } from './components/navigation/site-nav/site-nav.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageComponent } from './components/pages/page/page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { TopNavPageComponent } from './components/navigation/top-nav-page/top-nav-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopNavComponent,
    FooterComponent,
    SiteNavComponent,
    HomeComponent,
    PageComponent,
    LoginComponent,
    LandingComponent,
    TopNavPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
