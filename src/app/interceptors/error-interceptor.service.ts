/*
 * Copyright (c) 2018.  Andrew Newton
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
        //location.reload( true );
      }
      const error = err.error.message || err.statusText;
      return throwError( error );
    }));
  }

  constructor(private jwtAuth: JwtAuthenticationService) { }
}
