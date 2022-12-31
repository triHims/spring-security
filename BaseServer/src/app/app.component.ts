import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  title = 'demo';
  greeting:any = {};
  
  constructor(private http:HttpClient){
	  http.get("resource").subscribe(data=>this.greeting=data);
  }
}
