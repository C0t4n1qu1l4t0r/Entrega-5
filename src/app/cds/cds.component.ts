import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CdServiceService } from '../cd-service.service';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css']
})
export class CdsComponent implements OnInit{
  cds: any;
  constructor(private http: HttpClient, public cdService: CdServiceService, private spinner: NgxSpinnerService){
   
  }
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.cargarLista();
    console.log(this.cds);
    
  }
  cargarLista(){
    this.http.get('./assets/lista-cd.json').subscribe(
      data => {
        this.cds = data;
      }
    )
  }
  agregarCds(cdVisto: any){
    this.cdService.cdVisto(cdVisto)
  }
}
