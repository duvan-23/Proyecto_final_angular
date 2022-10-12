import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-estudiantes',
  templateUrl: './agregar-estudiantes.component.html',
  styleUrls: ['./agregar-estudiantes.component.css']
})
export class AgregarEstudiantesComponent implements OnInit {
  formularioEmpleado: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AgregarEstudiantesComponent>,
    private fb: FormBuilder
    ) {
    this.formularioEmpleado = fb.group({
      nombre: new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.pattern('^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$'), Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      edad: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {
  }
  agregarEmpleado(){

  }
  guardar(){
    this.dialogRef.close(this.formularioEmpleado.value);
  }
}
