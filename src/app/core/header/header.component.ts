import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { UserPayLoad } from '../../../modelo/UserPayLoad';
import { Router } from '@angular/router';

@Component({
    selector: 'portal-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent { 

    user$: Observable<UserPayLoad>;

    constructor(
        private userService: UserService, 
        private router:Router) {

        this.user$ = userService.getUser();
    }

    logout() {
        console.log('deslogando');
        this.userService.logout();
        this.router.navigate(['']);
    }
}