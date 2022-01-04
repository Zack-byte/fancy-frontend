import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { ProfileIconModule } from './components/profile-icon';
import { HomePageModule } from './components/home-page';
import { NavbarModule } from './components/navbar';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ProjectsPageModule } from './components/projects-page';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FooterModule,
    HomePageModule,
    ProjectsPageModule,
    ProfileIconModule,
    BrowserAnimationsModule,
    NavbarModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public matIconRegistry: MatIconRegistry) {
    matIconRegistry.setDefaultFontSetClass('fas')
  }
}
