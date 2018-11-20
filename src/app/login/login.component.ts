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

  username: string;
  password: string;

  constructor(
    private router: Router,
    private jwtAuth: JwtAuthenticationService
  ) { }

  ngOnInit() {
  }

  login() : void {
    this.jwtAuth.login( this.username, this.password )
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
