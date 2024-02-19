import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubService } from './github.service';

// Define your routes
const routes: Routes = [
  { path: '', component: GithubReposComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Add RouterModule with your routes
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
