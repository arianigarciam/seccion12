import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';


@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {
    return heroe.id != undefined ? `assets/heroes/${ heroe.id }.jpg` : heroe.alt_img != undefined ? heroe.alt_img : "assets/no-image.png";
  }

}
