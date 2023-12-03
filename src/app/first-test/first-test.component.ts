import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-test',
  templateUrl: './first-test.component.html',
  styleUrls: ['./first-test.component.css']
})
export class FirstTestComponent {
  
  color!: string ;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ){
    this.color= this.activatedRoute.snapshot.params['default'];
  }
  
  updateRoute(){
  this.router.navigate(['/div-color', this.color])
  }
  
  
  changeColor(input: any){
    this.color=input.value;
    input.value='';
    this.updateRoute();
  }
  resetColor(){
    this.color='lightgreen';
    this.updateRoute();
  }


}
