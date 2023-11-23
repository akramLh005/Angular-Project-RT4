import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  size = '30px';
  police = 'Arial';
  color = 'black';
  fonts = ['Arial','fantasy','Bahnschrift'];
  changeSize(size: any ) {
    this.size = size + 'px';

  }
  changePolice(police: string) {
    this.police = police;

  }

  changeColor(colorinput : string) {
    this.color=colorinput;
  }
}
