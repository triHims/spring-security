import { HttpClient } from '@angular/common/http';
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
    http.get('resource').subscribe(data => this.greeting = data);
  }

  authenticated() { return this.app.authenticated; }
}
