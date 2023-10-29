import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Asegúrate de importar NgbModal


@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css'],
  
})


export class PrimeroComponent {

  

  personas: Array<any> = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 30 },
    { nombre: 'María', apellido: 'López', edad: 25 },
    { nombre: 'Luis', apellido: 'García', edad: 28 },
    { nombre: 'Ana', apellido: 'Rodríguez', edad: 35 },
    { nombre: 'Carlos', apellido: 'Martínez', edad: 40 },
    { nombre: 'Laura', apellido: 'Sánchez', edad: 22 },
    { nombre: 'Pedro', apellido: 'Fernández', edad: 45 },
    { nombre: 'Elena', apellido: 'Morales', edad: 33 },
    { nombre: 'Miguel', apellido: 'Jiménez', edad: 29 },
    { nombre: 'Carmen', apellido: 'Ruiz', edad: 37 }
  ];

  nuevaPersona: any = {
    tipo: 'Persona',
    nombre: '',
    edad: 0
  };

  registrarPersona(): void {
    this.personas.push(this.nuevaPersona);
    this.nuevaPersona = { tipo: 'Persona', nombre: '', edad: 0 };
  }
  
  eliminarPersona(index: number): void {
    this.personas.splice(index, 1);
  }
  
  filtro: string = '';
  
  cumpleFiltro(persona: any): boolean {
    if (!this.filtro) {
      return true;
    }

    return (
      persona.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
      persona.apellido.toLowerCase().includes(this.filtro.toLowerCase()) ||
      persona.edad.toString().includes(this.filtro)
    );
  }
  
  modoEdicion = false;
  indicePersonaEditada: number | null = null;

  editarPersona(index: number): void {
    if (index >= 0 && index < this.personas.length) {
      this.nuevaPersona = { ...this.personas[index] };
      this.modoEdicion = true;
      this.indicePersonaEditada = index;
    }
  }
  
  guardarEdicion(): void {
    if (this.indicePersonaEditada !== null) {
      this.personas[this.indicePersonaEditada] = this.nuevaPersona;
      this.cancelarEdicion();
    }
  }
  
  cancelarEdicion(): void {
    this.modoEdicion = false;
    this.indicePersonaEditada = null;
    this.nuevaPersona = { tipo: 'Persona', nombre: '', edad: 0 };
  }
}
