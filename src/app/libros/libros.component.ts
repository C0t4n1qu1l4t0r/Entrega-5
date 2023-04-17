import { Component, OnInit } from '@angular/core';
import { LibroclickedService } from '../libroclicked.service';
import { HttpClient } from '@angular/common/http'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  libros: any
  errorHttp: any;
  constructor(private http: HttpClient, public libroClicked: LibroclickedService, private spinner: NgxSpinnerService){

  }
  ngOnInit(): void {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.cargarLista();
    console.log(this.libros);
    
  }
  cargarLista(){
    this.http.get('./assets/lista-libros.json').subscribe(
      data => {
        this.libros = data;
      },
      data => {
        this.errorHttp = true;
      }
    )
  }
  agregarLibros(libroVisto: any){
    this.libroClicked.libroVisto(libroVisto)
  }
  
  showAutor(libro: any) {
    alert(libro.autor);
  }
}

