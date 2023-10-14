import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifPlayerComponent } from './gif-player/gif-player.component1';
import { GifPlayer2Component } from './gif-player2/gif-player2.component';

@NgModule({
  declarations: [
    AppComponent,
    GifPlayerComponent,
    GifPlayer2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
