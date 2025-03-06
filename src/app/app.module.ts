import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import DataTables from 'datatables.net';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent // Aquí declaras los componentes que pertenecen a este módulo
  ],
  imports: [
    BrowserModule, 
    DataTablesModule// Aquí agregas los módulos que necesitarás, como BrowserModule para aplicaciones de navegador
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
