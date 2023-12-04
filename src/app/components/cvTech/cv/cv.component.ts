import { Component, OnInit } from '@angular/core';
import { Personne } from '../../../model/personne';
import { CvService } from '../service/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes!: Personne[];
  selectedPersonne!: Personne;

  constructor(
    private cvService : CvService,
    private toaster : ToastrService
  ){}

  ngOnInit(): void {
     this.cvService.getPersonnes().subscribe(
       (personnes)=>{
         this.personnes = personnes;
       },
       (error)=>{

         this.toaster.error('Problem : Access failed to API:( ')
         this.personnes = this.cvService.getFakePersonnes();
       }
     );
  }

  selectPersonne(personne : any){
    this.selectedPersonne = personne;

  }

}
