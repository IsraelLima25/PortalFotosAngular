import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations:[
        HomeComponent,
        SigninComponent,
        SignupComponent
    ],
    imports:[
        CommonModule
    ],
    providers:[]
})
export class HomeModule{}