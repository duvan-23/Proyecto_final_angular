import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { estudiantes } from 'src/app/datos/estudiantes';
import { Estudiantes } from 'src/app/models/estudiantes';
import {MatPaginator} from '@angular/material/paginator';
import { tap } from 'rxjs';
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit, AfterViewInit  {
  listaEstudiantes: Estudiantes[]=estudiantes;
  columnas: string[] = ['id','nombre','apellido','acciones'];
  dataSource: MatTableDataSource<Estudiantes> = new MatTableDataSource<Estudiantes>(this.listaEstudiantes);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  filtrarCurso(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate= function(estudiante: Estudiantes, filtro: string){
      return estudiante.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }

  filtrarComision(event: Event){
    const valorObtenido = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate= function(estudiante: Estudiantes, filtro: string){
      return estudiante.apellido.toLocaleLowerCase().includes(filtro.toLocaleLowerCase());
    };
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase();
  }
}
