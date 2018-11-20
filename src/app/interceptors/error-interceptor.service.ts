import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError } from "rxjs/operators";

import { JwtAuthenticationService } from "../services/jwt-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError( err => {
      if( err.status === 401 ) {
        this.jwtAuth.logout();
        location.reload( true );
      }
      const error = err.error.message || err.statusText;
      return throwError( error );
    }));
  }

  constructor(private jwtAuth: JwtAuthenticationService) { }
}
