import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';

import { AuthGuard } from "./core/auth/authguard.service";
import { SigninComponent } from "./load-home/signin/signin.component";
import { SignupComponent } from "./load-home/signup/signup.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HomeGuardService } from "src/service/home-guard.service";

const routes: Routes = [
    {
        path: '',
        component: SigninComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'signup',
        component: SignupComponent
    },

    {
        path: 'postagens',
        component: HomePageComponent,
        canActivate: [HomeGuardService]
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes)
         
    ],
    exports: [ RouterModule ]
})
export class AppRouterModule{}