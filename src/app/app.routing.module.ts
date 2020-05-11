import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { SigninComponent } from "./home/signin/signin.component";
import { SignupComponent } from "./home/signup/signup.component";
import { AuthGuard } from "./core/auth/authguard.service";

const routes: Routes = [
    {
        path: '',
        component: SigninComponent,
        canActivate: [AuthGuard]
    }

];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRouterModule{}