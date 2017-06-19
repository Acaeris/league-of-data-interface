import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ChampionModule } from './champion/champion.module';
import { HomeModule } from './home/home.module';
import { SummonerModule } from './summoner/summoner.module';
import { SharedModule } from './shared/shared.module';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { MobilebarComponent } from './shared/mobilebar/mobilebar.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ChampionModule,
    HomeModule,
    SummonerModule,
    SharedModule.forRoot()
  ],
  declarations: [
      NavbarComponent,
      MobilebarComponent,
      FooterComponent,
      AppComponent
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
