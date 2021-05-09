import { Component, OnInit,Input } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';



@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe!:Heroe; 
  
  constructor() { }

  ngOnInit(): void {

  }

}
