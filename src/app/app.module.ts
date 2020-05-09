import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeadComponent } from './head/head.component';
import { PostagemListComponent } from './body/postagem-list/postagem-list.component';
import { PostagemModule } from './body/postagem-list/postagem.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { AppRouterModule } from './app.routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,    
    BodyComponent,
    FooterComponent,
    HeadComponent          
  ],
  imports: [
    BrowserModule,
    PostagemModule,
    AppRouterModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
