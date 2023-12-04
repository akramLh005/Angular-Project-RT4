import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTestComponent } from './first-test/first-test.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { TestRainbowComponent } from './directive/test-rainbow/test-rainbow.component';
import {Nf404Component} from "./components/nf404/nf404.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { InformationCvComponent } from './components/cvTech/information-cv/information-cv.component';
import { ImageObservableComponent } from './components/image-observable/image-observable.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'div-color/:default', component: FirstTestComponent },
  { path: 'div-color', redirectTo: 'div-color/lightblue', pathMatch: 'full' },
  { path: 'carte-visite', component: TwoWayComponent },
  { path: 'pere-fils', component: PereComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InformationCvComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'rainbow', component: TestRainbowComponent },
  { path: 'image-non-stop', component: ImageObservableComponent },
  { path: "**", component:  Nf404Component}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
