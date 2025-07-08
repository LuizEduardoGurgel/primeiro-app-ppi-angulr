import { Component } from '@angular/core';
import { Boletim} from './boletim';

@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.css'
})

export class CalculaMedia {
  mediaParcial: number | undefined
  boletim: Boletim

  constructor(){
    this.boletim = new Boletim()
    this.mediaParcial = undefined
  }

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number){ 
    this.mediaParcial = this.boletim.calcularMediaParcial(b1, b2, b3, b4);
  }

}
