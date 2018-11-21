import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login";

import { LoginAccountService } from "../services/login-account.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.scss']
})
export class LoginAccountComponent implements OnInit {

  login : Login = new Login();

  constructor(private service : LoginAccountService ) { }

  ngOnInit() {
    this.service.loginAccount()
      .subscribe( login => {
        this.login = login
      });
  }

}
