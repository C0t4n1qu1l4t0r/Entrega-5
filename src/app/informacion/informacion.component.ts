import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit{
  
  libros: Array<object>;
  libroId: any;
  libroClick: any;
  
  

  constructor(private rutaUsuario: ActivatedRoute, private rutaCd: ActivatedRoute){
    this.libros = [
      {id: '1', titulo: 'La bestia', autor: 'Carmen Mola'},
      {id: '2', titulo: 'La ola', autor: 'Carmen'},
      {id: '3', titulo: 'La puerta', autor: 'Mola'}
    ]

  }
  ngOnInit(): void {
    
    this.rutaUsuario.params.subscribe(params => {
      this.libroId = params['libroId'],
      this.libroClick = this.libroBuscador();
    });
   
  }

  filtroId(libro: any){
    return libro.id == this;
  }
  libroBuscador(){
    return this.libros.filter(this.filtroId, this.libroId)[0]
  }
  

}
