import { NgModule } from "@angular/core";
import { HeadPageComponent } from "./head-page.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [HeadPageComponent],
    imports: [CommonModule, RouterModule],
    providers: [],
    exports: [HeadPageComponent]
})
export class HeadPageModule{

}