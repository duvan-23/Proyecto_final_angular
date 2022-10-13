import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { AgregarEstudiantesComponent } from './components/crud_estudiantes/agregar-estudiantes/agregar-estudiantes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarEstudiantesComponent } from './components/crud_estudiantes/editar-estudiantes/editar-estudiantes.component';
import { EliminarEstudiantesComponent } from './components/crud_estudiantes/eliminar-estudiantes/eliminar-estudiantes.component';
import { NombresPipe } from './pipes/nombres.pipe';
import { TitulosDirective } from './directives/titulos.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    NavbarComponent,
    ContenidoComponent,
    EstudiantesComponent,
    AgregarEstudiantesComponent,
    EditarEstudiantesComponent,
    EliminarEstudiantesComponent,
    NombresPipe,
    TitulosDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
