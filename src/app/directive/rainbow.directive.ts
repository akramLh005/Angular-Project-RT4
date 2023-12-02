import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  constructor() { }
  colors = [
    'yellow',
    'Aqua',
    'Teal',
    'Blue',
    'Fuchsia',
    'Purple',
    'Green',
    'Red',
    'Gray',
    'Orange',
    'Cyan',
    'Magenta',
    'Lavender',
    'Turquoise'
  ];
  @HostBinding('style.color') color = 'black'
  @HostBinding('style.borderColor') bordeColor = 'black'
  @HostListener('keypress') changeColor(){
    const i = Math.floor(Math.random() * (this.color.length -1));
    this.color = this.bordeColor= this.colors[i];
  }

}
