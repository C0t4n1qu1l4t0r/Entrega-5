import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CdServiceService {

  cds: any;

  constructor() {
    this.cds = [];
   }
   cdVisto(cdVisto: any){
    this.cds.push(cdVisto);
   }
   verListado(){
    if(this.cds.length > 0){
      return this.cds;
    }else{
      return false;
    }
   }
  }