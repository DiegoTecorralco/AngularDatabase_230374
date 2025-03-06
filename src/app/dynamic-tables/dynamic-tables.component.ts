
import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {DataTableDirective}from 'angular-datatables';
import { Subject } from 'rxjs';
import{data} from 'jquery';
@Component({
  selector: 'app-dynamic-tables',
  imports: [],
  templateUrl: './dynamic-tables.component.html',
  styleUrl: './dynamic-tables.component.css'
})
export class DinamicTablesComponent implements OnInit {
  Users: any[]=[];
  dtOptions:any={};

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.dtOptions={
      paginType:'full_numbers',
      pageLegth:5,
      processing:true
    };
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(data=>{
      this.Users = data;
    });
  }
}
