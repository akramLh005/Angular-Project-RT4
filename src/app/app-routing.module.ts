import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTestComponent } from './first-test/first-test.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './components/cvTech/cv/cv.component';
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { TestRainbowComponent } from './directive/test-rainbow/test-rainbow.component';

const routes: Routes = [
  //{ path: "", component: SecondComponent },
  { path: "div-color", component: FirstTestComponent },
  { path: "carte-visite", component: TwoWayComponent },
  { path: "pere-fils", component: PereComponent },
  { path: "cv", component: CvComponent },
  { path: "mini-word", component: MiniWordComponent },
  { path: "rainbow", component: TestRainbowComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
