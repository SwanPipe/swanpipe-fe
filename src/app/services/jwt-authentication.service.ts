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
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators'

import { AppConfigService } from '../app-config.service';

const LOGIN = "login";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationService {

  httpOptions = {
    headers: new HttpHeaders( {
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService
  ) { }

  login( id: string, password: string ) {
    return this.http.post<any>(
      this.appConfigService.getConfig().backendUrl + "/spv1/login",
      { loginId : id, password: password },
      this.httpOptions )
      .pipe( map( login => {
        if( login && login.token ) {
          localStorage.setItem( LOGIN, JSON.stringify( login ) );
        }

        return login;
      } ) );
  }

  logout() {
    localStorage.removeItem( LOGIN );
  }

  isLoggedIn() : boolean {
    if( localStorage.getItem( LOGIN ) ) {
      return true;
    }
    //else
    return false;
  }

}
