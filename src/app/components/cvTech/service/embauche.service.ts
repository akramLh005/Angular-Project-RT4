import { Injectable } from '@angular/core';
import { Personne } from '../../../model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauchees: Personne[]=[];

  constructor() { }

  getEmbauchees(): Personne[] {
    return this.embauchees;
  }
  embaucher(personne: Personne): boolean {
    const index = this.embauchees.indexOf(personne);
    if (index < 0) {
      this.embauchees.push(personne);
      return true;
    }
    /*
    else {
      alert(`${personne.firstname} ${personne.name} is already selected for hire`);
    } 
    */
    return false;
  }
}
