import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-observable',
  templateUrl: './image-observable.component.html',
  styleUrls: ['./image-observable.component.css']
})
export class ImageObservableComponent implements OnInit {

  myObservable!: Observable<string> ;
  myImages=[
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
    'default_profile.jpg'
  ]
  currentImage!: string;
  ngOnInit(): void {
      this.myObservable = new Observable(
        (observer)=> {
          let i= this.myImages.length - 1;
          setInterval(
            ()=>{
              observer.next(this.myImages[i]);
              if (i>0){ i--; }
              else { i= this.myImages.length - 1; }
            }
            ,1500);
        }
      );

      this.myObservable.subscribe(
        (result)=>{
          this.currentImage = result;
        }
      );
  }


}
