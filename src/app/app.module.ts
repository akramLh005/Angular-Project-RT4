import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FirstTestComponent } from './first-test/first-test.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';

import { CvComponent } from './components/cvTech/cv/cv.component';
import { ListeCvComponent } from './components/cvTech/liste-cv/liste-cv.component';
import { ItemCvComponent } from './components/cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './components/cvTech/detail-cv/detail-cv.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';

import { RainbowDirective } from './directive/rainbow.directive';
import { TestRainbowComponent } from './directive/test-rainbow/test-rainbow.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { NavbarComponent } from './navbar/navbar.component';

import { Nf404Component } from './components/nf404/nf404.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    TwoWayComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    DefaultImagePipe,
    RainbowDirective,
    TestRainbowComponent,
    MiniWordComponent,
    TestRainbowComponent,
    NavbarComponent,
    Nf404Component,
    LandingPageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
