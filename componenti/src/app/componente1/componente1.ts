import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente1',
  imports: [],
  templateUrl: './componente1.html',
  styleUrl: './componente1.css'
})
export class Componente1 {
  @Input() testo = ''; //riceve il valore dal padre
}
