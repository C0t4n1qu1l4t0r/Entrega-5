import { Component, OnInit } from '@angular/core';
import { CdServiceService } from '../cd-service.service';
import { LibroclickedService } from '../libroclicked.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  
  constructor(public libroService: LibroclickedService, public cdService: CdServiceService){

  }
  ngOnInit(): void {
    
  }

}
