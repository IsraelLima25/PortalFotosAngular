import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { UserPayLoad } from '../../../modelo/UserPayLoad';
import { Router } from '@angular/router';

@Component({
    selector: 'portal-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent { 

    user$: Observable<UserPayLoad>;

    constructor(
        private userService: UserService, 
        private router:Router) {

        this.user$ = userService.getUser();
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}