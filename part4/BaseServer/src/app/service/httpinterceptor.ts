import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";


export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Handle xhr");
    
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}