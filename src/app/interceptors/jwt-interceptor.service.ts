import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let login = JSON.parse( localStorage.getItem( "login" ) );
    if( login && login.token ) {
      req = req.clone( {
        setHeaders: {
          Authorization: `Bearer ${login.token}`
        }
      });
    }
    return next.handle( req );
  }

  constructor() { }
}
