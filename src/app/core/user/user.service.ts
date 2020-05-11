import { Injectable } from '@angular/core'
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { UserPayLoad } from 'src/modelo/UserPayLoad';
import * as jwt_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class UserService{

    private userSubject = new BehaviorSubject<UserPayLoad>(null);


    constructor(private tokenService: TokenService) { 
        this.tokenService.hasToken() &&
        this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const userPayLoad = jwt_decode(token) as UserPayLoad; //<- (aqui a chamada jwt_decode)
        this.userSubject.next(userPayLoad);
    }
}