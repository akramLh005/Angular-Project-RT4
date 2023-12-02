import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  firstname: string ="John";
  lastname : string ="Marvel";
  job : string = "CEO";
  image : any = "rotating_card_profile3.png"
  quote : string = "To be or not to be, this is my awesome motto!";
  jobDescription : string = "I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere";
  jobKeywords : string = "Web design, Adobe Photoshop, HTML5, CSS3, Corel";


}
