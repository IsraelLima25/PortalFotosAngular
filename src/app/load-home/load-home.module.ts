import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";
import { VMessagesModule } from "src/shared/components/vmessage/vmessages/vmessages.module";
import {  ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [SigninComponent, SignupComponent],
    imports: [CommonModule, VMessagesModule,ReactiveFormsModule,RouterModule],
    providers: [],
    exports: [SigninComponent,SignupComponent]    
})
export class LoadHomeModule{}