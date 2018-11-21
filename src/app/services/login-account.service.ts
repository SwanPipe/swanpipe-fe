import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

import { AppConfigService } from '../app-config.service';
import {Login} from "../models/login";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginAccountService {

  httpOptions = {
    headers: new HttpHeaders( {
      'Accept': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService
  ) { }

  loginAccount() : Observable<Login> {
    return this.http.get<Login>(
      this.appConfigService.getConfig().backendUrl + "/spv1/login-account",
      this.httpOptions );
  }
}
