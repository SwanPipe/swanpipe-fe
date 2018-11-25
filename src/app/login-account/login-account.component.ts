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

import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";

import { AccountInfoService } from "../services/account-info.service";
import {AccountInfo} from "../models/account-info";

const LAST_SUCCESSFUL_LOGIN = "lastSuccessfulLogin";
const LAST_FAILED_LOGIN = "lastFailedLogin";
const ROLES = "roles";

export interface LoginInfo {
  item: string;
  value: any;
}

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.scss']
})
export class LoginAccountComponent implements OnInit {

  actorColumns: string[] = ['pun','owner'];
  loginColumns: string[] = [ 'item', 'value' ];
  accountInfo : AccountInfo = new AccountInfo();

  constructor(private service : AccountInfoService ) { }

  ngOnInit() {
    this.service.accountInfo()
      .subscribe( accountInfo => {
        this.accountInfo = accountInfo
      });
  }

  loginInfo() : LoginInfo[] {
    let retval = [];
    retval.push(
      { item: "Login ID", value: this.accountInfo.loginId }
    );
    if( this.accountInfo.created ) {
      retval.push(
        { item: "Created",
          value: formatDate( this.accountInfo.created, 'medium', "en-US" )}
      );
    }
    if( this.accountInfo.data ) {
      if( this.accountInfo.data[ LAST_SUCCESSFUL_LOGIN ] )  {
        retval.push(
          { item: "Last login",
            value: formatDate( this.accountInfo.data[ LAST_SUCCESSFUL_LOGIN ], 'medium', "en-US" )}
          );
      }
      if( this.accountInfo.data[ LAST_FAILED_LOGIN ] ) {
        retval.push(
          { item: "Last failed login",
            value: formatDate( this.accountInfo.data[ LAST_FAILED_LOGIN ], 'medium', "en-US")}
        );
      }
      if( this.accountInfo.data[ ROLES ] ) {
        retval.push(
          { item: "Roles", value: this.accountInfo.data[ ROLES ].join() }
        );
      }
    }
    return retval;
  }

  lastSuccessfulLogin() : string {
    if( this.accountInfo.data && this.accountInfo.data[LAST_SUCCESSFUL_LOGIN] ) {
      return this.accountInfo.data[ LAST_SUCCESSFUL_LOGIN ];
    }
    //else
    return null;
  }

  lastFailedLogin() : string {
    if( this.accountInfo.data && this.accountInfo.data[ LAST_FAILED_LOGIN ] ) {
      return this.accountInfo.data[ LAST_FAILED_LOGIN ];
    }
    //else
    return null;
  }

}
