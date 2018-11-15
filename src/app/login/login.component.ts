import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  login() : void {
    if( this.username == 'admin' && this.password == 'admin' ) {
      this.router.navigate(["login-account"] );
    }
    else {
      alert( "Invalid Credentials" );
    }
  }

}
