import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MyHomeComponentComponent } from './components/my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './components/my-movie-component/my-movie-component.component';

const routes: Routes = [
  { path: '', component: MyHomeComponentComponent },
  { path: 'home', component: MyHomeComponentComponent },
  { path: 'movie/:id', component: MyMovieComponentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
