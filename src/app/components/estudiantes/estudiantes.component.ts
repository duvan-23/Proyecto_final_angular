import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { estudiantes } from 'src/app/datos/estudiantes';
import { Estudiantes } from 'src/app/models/estudiantes';
import {MatPaginator} from '@angular/material/paginator';
import { tap } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { AgregarEstudiantesComponent } from '../agregar-estudiantes/agregar-estudiantes.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit, AfterViewInit  {
  listaEstudiantes: Estudiantes[]=estudiantes;
  columnas: string[] = ['id','nombre','apellido','correo','edad','acciones'];
  dataSource: MatTableDataSource<Estudiantes> = new MatTableDataSource<Estudiantes>(this.listaEstudiantes);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private dialog: MatDialog,private _snackBar: MatSnackBar) { }

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

  agregarEstudiante(){
    let dialog =this.dialog.open(AgregarEstudiantesComponent,{
      width: '550px',
      panelClass: 'custom-dialog-container'
    });
    dialog.beforeClosed().subscribe(res=>{
      let id =this.listaEstudiantes[this.listaEstudiantes.length -1].id;
      res.id=id+1;
      console.log(res);
      this.listaEstudiantes.push(res);
      this.dataSource.paginator = this.paginator;
      this._snackBar.open(`Agrego el estudiante ${res.nombre} ${res.apellido} Exitosamente`, "Cerrar", {
        duration: 3000
      });
    })
  }

}
