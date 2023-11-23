import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../../../model/personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Output() selectedPersonne = new EventEmitter<Personne>();
  @Input() personne!: Personne;
  constructor(){}

  selectPersonne(){
    this.selectedPersonne.emit(this.personne);
  }

}
