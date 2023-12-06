import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../../../model/personne';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  
  //@Output() selectedPersonne = new EventEmitter<Personne>();
  @Input() personne!: Personne;
  @Input()size=50;
  constructor(private cvService: CvService){}

  selectPersonne(){
    //this.selectedPersonne.emit(this.personne);
    this.cvService.selectPersonne(this.personne);
  }



}
