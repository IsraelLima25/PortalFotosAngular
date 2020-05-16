import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/modelo/Usuario';
import { UserPayLoad } from 'src/modelo/UserPayLoad';

@Component({
  selector: 'portal-head-page',
  templateUrl: './head-page.component.html',
  styleUrls: ['./head-page.component.css']
})
export class HeadPageComponent {
  
  url: string = "/assets/foto-home.png";

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
