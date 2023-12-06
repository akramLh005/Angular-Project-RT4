import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../../../model/personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent {
  @Input() personnes: Personne[] =[];
  // @Output() selectedPersonneEvent = new EventEmitter();

  // selectPersonne(selectedPersonne : any){
  //   this.selectedPersonneEvent.emit(selectedPersonne);
  // }

}
