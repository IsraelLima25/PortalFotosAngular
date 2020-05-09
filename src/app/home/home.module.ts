import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ReactiveFormsModule } from "@angular/forms"; 

@NgModule({
    declarations:[
        HomeComponent,
        SigninComponent,
        SignupComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule
        
    ],
    providers:[]
})
export class HomeModule{}