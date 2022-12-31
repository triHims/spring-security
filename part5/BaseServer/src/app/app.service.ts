import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/internal/operators/finalize';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    authenticated = false
    constructor(private http: HttpClient) { }


    authenticate() {

        this.http.get('user').subscribe((response: any) => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
        },()=>{this.authenticated=false;});

    }
    
    logout() {
      return this.http.post('logout', {}).pipe(
        finalize(() => {
          this.authenticated = false;
      })
      );
    }
}
