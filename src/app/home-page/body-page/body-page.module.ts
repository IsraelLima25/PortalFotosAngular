import { NgModule } from "@angular/core";
import { BodyPageComponent } from "./body-page.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [BodyPageComponent],
    imports: [CommonModule, RouterModule],
    providers: [],
    exports: [BodyPageComponent]
})
export class BodyPageModule{}