import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
