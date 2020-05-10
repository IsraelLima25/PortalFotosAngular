import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { SigninComponent } from "./home/signin/signin.component";
import { SignupComponent } from "./home/signup/signup.component";

const routes: Routes = [
    {
        path: '',
        component: SigninComponent
    }

];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRouterModule{}