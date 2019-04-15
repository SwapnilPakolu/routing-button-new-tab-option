import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NewTabOptComponent } from './new-tab-opt/new-tab-opt.component';
import {Route,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes:Route[]=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent, NewTabOptComponent, HomeComponent, AboutComponent ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
