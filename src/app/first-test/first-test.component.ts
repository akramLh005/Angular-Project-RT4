import { Component } from '@angular/core';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent {
  color='white';
  changeColor(input: any){
    this.color=input.value;
    input.value='';
  }
  resetColor(){
    this.color='white';
  }

}
