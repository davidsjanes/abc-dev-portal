import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ModalService } from './services/modal/modal.service';
import { SlideoutService } from './services/slideout/slideout.service';

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
import { AccountComponent } from './components/pages/account/account.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { NewAppComponent } from './components/pages/home/new-app/new-app.component';
import { SlideoutComponent } from './components/shared/slideout/slideout.component';
import { ProdRequestComponent } from './components/pages/home/prod-request/prod-request.component';
import { ManageTableComponent } from './components/pages/home/manage-table/manage-table.component';
import { ManageAppComponent } from './components/pages/home/manage-app/manage-app.component';
import { DeleteConfirmComponent } from './components/pages/home/manage-app/delete-confirm/delete-confirm.component';

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
    TopNavPageComponent,
    AccountComponent,
    ModalComponent,
    SlideoutComponent,
    NewAppComponent,
    ProdRequestComponent,
    ManageTableComponent,
    ManageAppComponent,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OverlayModule,
    PortalModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [ModalService, SlideoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
