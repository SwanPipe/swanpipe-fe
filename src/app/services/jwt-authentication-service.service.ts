import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from 'rxjs/operators'

import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthenticationServiceService {

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
          localStorage.setItem( "login", JSON.stringify( login ) );
        }

        return login;
      } ) );
  }

  logout() {
    localStorage.removeItem( "login" );
  }
}
