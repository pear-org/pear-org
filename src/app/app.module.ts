import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentHeader} from './app.component.header'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StartsWithPipe } from './components/jobsearch/listFilter.pipe'
import { JobListingService } from './services/job-listing.service';
import { ListingComponent } from './components/jobsearch/listing.component'
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './components/homepage/homepage.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { LoginComponent } from './components/login/login.component';
import { JwtInterceptor } from './guards/jwt.interceptor';
import { ErrorInterceptor } from './guards/error.interceptor';
import { fakeBackendProvider } from './guards/fake-backend';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { StudentNavComponent } from './student-nav/student-nav.component';

const appRoutes: Routes = [
  { path: 'jobsearch', component: ListingComponent },
  { path: 'public', component: PublicComponent},
  { path: 'login', component: LoginComponent},
  { path: 'student-dashboard', component: StudentDashboardComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppComponentHeader,
    PublicComponent,
    ListingComponent,
    StartsWithPipe,
    LoginComponent,
    StudentDashboardComponent,
    AboutComponent,
    StudentNavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [JobListingService, 
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
