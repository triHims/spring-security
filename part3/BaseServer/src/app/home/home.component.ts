import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  title = 'Demo';
  greeting:any = {};

  constructor(private app: AppService, private http: HttpClient) {
     http.get('token').subscribe((data:any) => {
		 console.log("got the data")
      const token = data['token'];
      let headers = new HttpHeaders().append('x-auth-token', token)
      console.log(headers)
      http.get('http://localhost:9000', {headers : headers})
        .subscribe(response => this.greeting = response);
    }, () => {});
  }

  authenticated() { return this.app.authenticated; }
}
