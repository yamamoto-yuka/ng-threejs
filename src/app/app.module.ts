import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeComponent } from './three/three.component';
import { HomeComponent } from './home/home.component';
import { EarthComponent } from './earth/earth.component';
import { LeansflaresComponent } from './leansflares/leansflares.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeComponent,
    HomeComponent,
    EarthComponent,
    LeansflaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
