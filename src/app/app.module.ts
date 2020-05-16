import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { LoadHomeModule } from './load-home/load-home.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,    
    AppRouterModule, 
    HttpClientModule,    
    CoreModule,
    LoadHomeModule,
    HomePageModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
