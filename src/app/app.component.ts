import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Razvan Cotan';
  condicion: boolean = true;
  boton: string = "Ver";
  dias_semana:string = "";
  vblecolor: string | undefined;
  color: string | undefined;
  funcion(){
    this.condicion = !this.condicion;
    if(this.condicion == true){
      this.boton = "Ocultar";
    }else{
      this.boton = "Ver";
    }
  }
}
