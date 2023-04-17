import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { Prueba2Component } from './prueba2/prueba2.component';
import { FirmaComponent } from './firma/firma.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibrosComponent } from './libros/libros.component';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InformacionComponent } from './informacion/informacion.component';
import { CdsComponent } from './cds/cds.component';
import { InformacionCdsComponent } from './informacion-cds/informacion-cds.component';
import { LibroclickedService } from './libroclicked.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const rutas:Routes = [
  {path:'listado-libros', component: LibrosComponent},
  {path:'listado-cds', component: CdsComponent},
  {path:'informacion/:libroId', component: InformacionComponent},
  {path:'informacionCds/:cdId', component: InformacionCdsComponent},
  {path:'informacion', redirectTo: '/'}
]
@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    Prueba2Component,
    FirmaComponent,
    CabeceraComponent,
    LibrosComponent,
    CabeceraComponent,
    InformacionComponent,
    CdsComponent,
    InformacionCdsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  exports:[
    RouterModule,

  ],
  providers: [
    LibroclickedService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})


export class AppModule {

 }
