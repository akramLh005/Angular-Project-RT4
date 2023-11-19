import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CvComponent } from './cvTech/cv/cv.component';
import { ListCvComponent } from './cvTech/list-cv/list-cv.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { FirstTestComponent } from './first-test/first-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCvComponent,
    ItemComponent,
    DetailCvComponent,
    FirstTestComponent
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
