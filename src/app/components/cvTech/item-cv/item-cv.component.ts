import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../../../model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Output() selectedPersonne = new EventEmitter();
  @Input() personne!: Personne;
  constructor(){}

  selectPersonne(){
    console.log('item component',this.personne);
    this.selectedPersonne.emit(this.personne);
  }

}
