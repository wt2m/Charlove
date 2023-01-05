import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';
import { VideoComponent } from './video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    LateralMenuComponent,
    VideoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
