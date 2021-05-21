import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { TrendingComponent } from './trending/trending.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RandomComponent } from './random/random.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    TrendingComponent,
    NavbarComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
