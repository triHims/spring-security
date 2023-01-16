import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  user: {} = {};

  constructor(private appService: AppService, private http: HttpClient, private router: Router) {
    appService.authenticate(response => {
      this.user = response;
      this.message();
    })

  }
  logout() {
    this.http.post('logout', {}).subscribe(() => {
      this.appService.authenticated = false;
      this.router.navigateByUrl('/login')
    });

  }

  message(){
    if(!this.appService.authenticated) {
      this.router.navigate(['/unauthenticated'])
    } else {
      if(this.appService.writer){
        this.router.navigate(['/write'])
      }
      else {
        this.router.navigate(['/read'])
      }
    }
  }

}
