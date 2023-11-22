import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  
  @Input()filsProperty : any ;

  myFavoriteColor:any = 'purple';

  @Output() favoriteColorEvent = new EventEmitter();

  sendRequestToDad (){
    this.favoriteColorEvent.emit(this.myFavoriteColor);
  }



}
