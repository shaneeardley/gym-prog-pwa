import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {UserDetailsComponent} from './user-details/user-details.component';
import {LoginComponent} from './login/login.component';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: UserDetailsComponent},
  {path: 'profile', component: UserDetailsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
