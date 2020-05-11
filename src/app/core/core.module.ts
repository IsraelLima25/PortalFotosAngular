import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "../home/signin/signin.component";
import { SignupComponent } from "../home/signup/signup.component";

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [        
        CommonModule,
        RouterModule
    ]

})
export class CoreModule{

}