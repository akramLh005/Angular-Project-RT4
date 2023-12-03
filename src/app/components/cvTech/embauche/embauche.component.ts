import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../service/embauche.service';
import { Personne } from '../../../model/personne';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  private embaucheService: EmbaucheService = inject(EmbaucheService);
  embauchees: Personne[]=[];
  constructor() {
    this.embauchees = this.embaucheService.getEmbauchees();
  }
}
