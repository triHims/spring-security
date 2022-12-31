import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { XhrInterceptor } from './service/httpinterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: XhrInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
