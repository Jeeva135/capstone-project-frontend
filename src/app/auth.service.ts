import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUrl :string='';
  signUpUrl :string='';

  constructor(private http: HttpClient) {
    this.loginUrl = "http://localhost:8080/auth/login";
    this.signUpUrl = "http://localhost:8080/auth/register";
   }

   login(user:User): Observable<any>{
    return this.http.post<any>(this.loginUrl,user);
   }

   signup(user:User): Observable<any>{
    return this.http.post<any>(this.signUpUrl,user);
   }
}

