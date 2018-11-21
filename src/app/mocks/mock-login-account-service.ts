import {Login} from "../models/login";
import {Observable, of} from "rxjs";

export class MockLoginAccountService {
  loginAccount() : Observable<Login> {
    return of( new Login() )
  }
}
