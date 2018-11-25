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

import { AccountInfoService } from "../services/account-info.service";
import {AccountInfo} from "../models/account-info";

const LAST_SUCCESSFUL_LOGIN = "lastSuccessfulLogin";
const LAST_FAILED_LOGIN = "lastFailedLogin";

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.scss']
})
export class LoginAccountComponent implements OnInit {

  actorColumns: string[] = ['pun','owner'];
  accountInfo : AccountInfo = new AccountInfo();

  constructor(private service : AccountInfoService ) { }

  ngOnInit() {
    this.service.accountInfo()
      .subscribe( accountInfo => {
        this.accountInfo = accountInfo
      });
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
