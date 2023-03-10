import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    authenticated = false
    constructor(private http: HttpClient) { }


    authenticate(credentials: any, callback: any) {

        if (!credentials) {
            this.authenticated = true
            return
        }

        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        console.log("Headers are set")

        this.http.get('user', { headers: headers }).subscribe((response: any) => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }
}
