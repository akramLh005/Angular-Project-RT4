import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { FirstTestComponent } from './first-test/first-test.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    TwoWayComponent,
    FilsComponent,
    PereComponent
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
