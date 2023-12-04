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
import { EmbaucheComponent } from './components/cvTech/embauche/embauche.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { InformationCvComponent } from './components/cvTech/information-cv/information-cv.component';
import { ImageObservableComponent } from './components/image-observable/image-observable.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthFormComponent } from './components/auth-form/auth-form.component';


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
    LandingPageComponent,
    EmbaucheComponent,
    InformationCvComponent,

    AuthFormComponent,

    ImageObservableComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
