import { Component, OnInit } from '@angular/core';
import { ConexionService } from './service/conexion.service';
import { HttpResponse } from '@angular/common/http';
import { Catogoria } from './model/Categoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proyectDemo';
  listas : Catogoria[]=[];
  public displayedColumns: string[]=['Id','nombre','accion'];

  constructor(
    private conexionService: ConexionService){
  }

  ngOnInit(): void {
      this.datosGet();
  }

  datosGet(){
    this.conexionService.getList()
    .subscribe((res : HttpResponse<any>)=>{
      this.listas= res.body;
      console.log(res)
    });
  }

  nuevo(){

  }

  editar(objeto:Catogoria){

  }

  eliminar(objeto:Catogoria){

  }
  dato(){

  }
}
