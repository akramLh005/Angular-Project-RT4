import { Injectable } from '@angular/core';
import { Personne } from '../../../model/personne';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[]=[];

  constructor(
    private router: Router
  ) {
    this.personnes = [
      new Personne(1,'Lawrence','Maria',22,'rotating_card_profile.png',44444,'Student'),
      new Personne(2,'Peters','Roy',30,'rotating_card_profile2.png',77777,'Teacher'),
      new Personne(2,'smith','John',30,'        ',55555,'Painter')
    ];
   }

   getPersonnes(): Personne[] {
    return this.personnes;
   } 

   deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index > -1) {
      this.personnes.splice(index, 1);
      return true;
    }
    return false;
  }

  getById(id: number): Personne | null {
    
      return this.personnes.find(personne => personne.id === +id) ?? null;
    
}

}
