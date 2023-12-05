import { Component, OnInit } from '@angular/core';
import { CvService } from '../service/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../../../model/personne';
import { ToastrService } from 'ngx-toastr';
import {Observable} from "rxjs";

@Component({
  selector: 'app-information-cv',
  templateUrl: './information-cv.component.html',
  styleUrls: ['./information-cv.component.css']
})
export class InformationCvComponent implements OnInit{

  personne$!: Observable<Personne> ;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toaster: ToastrService
  ){

  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personne$ = this.cvService.getById(id);
    if (!this.personne$) {
      this.router.navigate(['/cv']);
    }
}

  deletePersonne(personne : Personne){
    this.cvService.deletePersonne(personne.id).subscribe({
      next: (ok) => {
        this.router.navigate(["/cv"]);
      },
      error: (erreur) => {console.log(erreur);
      }
    });
  }
}


