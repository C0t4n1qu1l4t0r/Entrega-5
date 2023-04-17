import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component {
  colorLocal: string = this.colorRandom();
colorRandom(){
  var numero = Math.floor(Math.random() * 999999);
  return '#' + numero;
}
}
