import { Component, OnInit } from '@angular/core';
import { Personne } from '../../../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes!: Personne[];
  selectedPersonne!: Personne;

  constructor(){}

  ngOnInit(): void {
      this.personnes=[
        new Personne(1,'Lawrence','Maria',22,'rotating_card_profile.png',44444,'Student'),
        new Personne(2,'Peters','Roy',30,'rotating_card_profile2.png',77777,'Teacher'),
        new Personne(2,'smith','John',30,'        ',55555,'Painter')
      ];
  }

  selectPersonne(personne : any){
    this.selectedPersonne = personne;

  }

}
