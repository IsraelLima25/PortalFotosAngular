import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { PostagemListComponent } from './body/postagem-list/postagem-list.component';
import { PostagemModule } from './body/postagem-list/postagem.module';

@NgModule({
  declarations: [
    AppComponent,    
    BodyComponent,
    FooterComponent,
    HeadComponent        
  ],
  imports: [
    BrowserModule,
    PostagemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
