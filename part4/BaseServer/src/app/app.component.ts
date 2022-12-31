import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent {
  title = 'demo';
  greeting:any = {};
  
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
      this.app.authenticate(undefined, undefined);
    }

    logout() {
      this.http.post('logout', {}).pipe(
        finalize(() => {
          this.app.authenticated = false;
          this.router.navigateByUrl('/login');
      })
      ).subscribe();
    }
}
