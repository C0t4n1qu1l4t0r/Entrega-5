import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion-cds',
  templateUrl: './informacion-cds.component.html',
  styleUrls: ['./informacion-cds.component.css']
})
export class InformacionCdsComponent implements OnInit{

  cds: Array<object>;
  cdId: any;
  cdClick: any;
  canciones: Array<object>

  constructor(private rutaCds: ActivatedRoute){
    this.canciones = [
      {nombre: 'cancion 1', idAutor: 1},
      {nombre: 'cancion 2', idAutor: 1},
      {nombre: 'cancion 3', idAutor: 2},
      {nombre: 'cancion 4', idAutor: 2},
      {nombre: 'cancion 5', idAutor: 2},
    ]
    this.cds = [
      {id: '1', autor: 'Juan', precio: '10', canciones: this.canciones},
      {id: '2', autor: 'Alberto', precio: '20', canciones: this.canciones}
    ]
  }
  ngOnInit(): void {
    this.rutaCds.params.subscribe(params => {
      this.cdId = params['cdId'],
      this.cdClick = this.cdBuscador();
    })
  }
  filtroCd(cd: any){
    return cd.id == this;
  } 
  cdBuscador(){
    return this.cds.filter(this.filtroCd, this.cdId)[0]
  }
}
