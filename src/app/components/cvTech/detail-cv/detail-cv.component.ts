import { Component, Input } from '@angular/core';
import { Personne } from '../../../model/personne';
import { EmbaucheService } from '../service/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {

  @Input()personne!: Personne;
  constructor(
    private embaucheService: EmbaucheService, 
    private toaster: ToastrService
   ){}


   embaucher(){
    if (this.personne) {
      if (this.embaucheService.embaucher(this.personne)) {
        this.toaster.success(`${this.personne.firstname} ${this.personne.name} has been selected for hire successfuly `)
      } else {
        this.toaster.warning(`${this.personne.firstname} ${this.personne.name} has already been selected for hire`)
      }
    }
   }
}
