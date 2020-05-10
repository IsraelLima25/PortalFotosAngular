import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';


const API_URL = 'http://localhost:8080/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(userName: string, password: string){        
      return this.http.post(API_URL,{ 
        nome:userName,
        senha: password        
      },
      {
        //Configuração extra para que o header seja exposto e manipulado
        observe: 'response'
      })
      .pipe(tap(res => {
        const token = res.headers.get('Authorization');
        this.userService.setToken(token);
        console.log(`The user ${userName} authenticated with token ${token}`)
      }))
  }
}
