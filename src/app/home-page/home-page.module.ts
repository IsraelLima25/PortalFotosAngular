import { NgModule } from "@angular/core";
import { HomePageComponent } from "./home-page.component";
import { CommonModule } from "@angular/common";
import { HeadPageComponent } from './head-page/head-page.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { HeadPageModule } from "./head-page/head-page.module";
import { BodyPageModule } from "./body-page/body-page.module";
import { FooterPageModule } from "./footer-page/footer-page.module";

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, HeadPageModule, BodyPageModule, FooterPageModule],
    providers: [],
    exports: []
})
export class HomePageModule{

}