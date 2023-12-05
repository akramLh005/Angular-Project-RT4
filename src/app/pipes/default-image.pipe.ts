import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string): string {
      
      if (!value.trim()) {
        return 'default_profile.jpg';
      }
  
      
      const img = new Image();
      img.src = `assets/images/${value}`;
  
      
      if (img.complete || (img.width + img.height) > 0) {
        return value;
      }
  
      
      return 'default_profile.jpg';
    
  
  }

}
