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
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {ExerciseListComponent} from './exercise-list/exercise-list.component';
import {ExerciseDetailsComponent} from './exercise-details/exercise-details.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: UserDetailsComponent},
  {path: 'profile', component: UserDetailsComponent},
  {path: 'exercises', component: ExerciseListComponent},
  {path: 'exercises/edit/:id', component: ExerciseDetailsComponent},
  {path: 'exercises/create', component: ExerciseDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    LoginComponent,
    HomeComponent,
    ExerciseListComponent,
    ExerciseDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatMenuModule,
    FormsModule,
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
