import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { ReactiveFormsModule } from "@angular/forms"; 
import { VMessagesModule } from "src/shared/components/vmessage/vmessages/vmessages.module";

@NgModule({
    declarations:[
        HomeComponent,
        SigninComponent,
        SignupComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        VMessagesModule
        
    ],
    providers:[]
})
export class HomeModule{}