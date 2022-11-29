import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
const myRoute:Routes=[
  {
    path:"",
    component:AddpostComponent
  },
  {
    path:"view",
    component:ViewpostComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddpostComponent,
    ViewpostComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
