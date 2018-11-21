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

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { JwtAuthenticationService } from "../services/jwt-authentication.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginId: string;
  password: string;

  constructor(
    private router: Router,
    private jwtAuth: JwtAuthenticationService
  ) { }

  ngOnInit() {
  }

  login() : void {
    this.jwtAuth.login( this.loginId, this.password )
      .pipe( first() )
      .subscribe(
        data => {
          this.router.navigate(["login-account"] );
      },
      error => {
        alert( "Invalid Credentials" );
      }
      );
  }

}
