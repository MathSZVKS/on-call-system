import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Base } from "src/app/base";


@Injectable({
    providedIn: 'root',
  })

  export class LoginService{

    constructor(private http: HttpClient){}

    url:string = Base.getUrl()

    login(loginBody: any):any{
       let url : string = this.url + 'api/auth/login'

        return this.http.post(url,loginBody);
    }

  }