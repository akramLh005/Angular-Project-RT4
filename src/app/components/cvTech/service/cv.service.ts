import { Injectable } from '@angular/core';
import { Personne } from '../../../model/personne';
import {  Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {API} from "../../../config/api.config";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private selectPersonneSubject = new Subject<Personne>();
  selectPersonne$ = this.selectPersonneSubject.asObservable();

  private personnes: Personne[]=[
    new Personne(1,'Lawrence','Maria',22,'rotating_card_profile.png',44444,'Student'),
    new Personne(2,'Peters','Roy',30,'rotating_card_profile2.png',77777,'Teacher'),
    new Personne(2,'smith','John',30,'        ',55555,'Painter')
  ];


  constructor(
    private router: Router,
    private http : HttpClient
  ) {
   }

   getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API.linkApi);
   }
   getFakePersonnes(): Personne []{
    return this.personnes;
   }

   deletePersonne(id: number): Observable<Personne> {

    return this.http.delete<Personne>(API.linkApi+id);


    // const index = this.personnes.indexOf(personne);
    // if (index > -1) {
    //   this.personnes.splice(index, 1);
    //   return true;
    // }
    // return false;
  }

  getById(id: number): Observable<Personne> {
      return this.http.get<Personne>(API.linkApi+id);

}

selectPersonne(personne: Personne) {
  this.selectPersonneSubject.next(personne);
}

}
