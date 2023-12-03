import { Component, OnInit } from '@angular/core';
import { Personne } from '../../../model/personne';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes!: Personne[];
  selectedPersonne!: Personne;

  constructor(
    private cvService : CvService 
  ){}

  ngOnInit(): void {
      this.personnes= this.cvService.getPersonnes();
  }

  selectPersonne(personne : any){
    this.selectedPersonne = personne;

  }

}
