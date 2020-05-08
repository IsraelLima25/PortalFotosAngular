import { NgModule } from "@angular/core";
import { PostagemListComponent } from "./postagem-list.component";
import { CommonModule } from "@angular/common";

import { HeaderPostagemComponent } from './header-postagem/header-postagem.component';
import { BodyPostagemComponent } from './body-postagem/body-postagem.component';
import { FooterPostagemComponent } from './footer-postagem/footer-postagem.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        PostagemListComponent,
        HeaderPostagemComponent,
        BodyPostagemComponent,
        FooterPostagemComponent        
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports:[
        PostagemListComponent
    ],
    providers:[]
})
export class PostagemModule{

}