import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "src/app/core/user/user.service";
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HomeGuardService implements CanActivate{

    constructor(private userService:UserService,
        private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {       

            if(!this.userService.isLogged()){
                this.router.navigate([''])
                return false;
            }
            return true;
    }


}