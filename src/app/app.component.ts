import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfraestructureComponent } from './components/infraestructure/infraestructure.component';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import Infraestructure from './types/Infraestructure';
import { ToolTipDirective } from './directives/tool-tip.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, JsonPipe, InfraestructureComponent, ToolTipDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('dialog') dialogRef!: ElementRef;
  // @ViewChild('closeButton') closeButtonRef!: ElementRef;
  infraFormModel: Infraestructure = {
    name: '',
    functionalAmount: 0,
    nonFunctionalAmount: 0
  }
  cdRef!: ChangeDetectorRef;

  constructor(private _cdRef: ChangeDetectorRef){
    this.cdRef = _cdRef;
  }

  ngAfterViewInit(): void {
    // (this.dialogRef.nativeElement as HTMLDialogElement).showModal();
  }

  headers = ['Designação', 'Funcionais', 'Não Funcionais', 'Número Total'];
  infras: Infraestructure[] = [
    { name: 'Salas de Aula Teóricas', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Salas de Informática', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Automação', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Biologia', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de CAD', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de CNC', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Electrónica', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Energias Renováveis', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Física', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Frio e Climatização', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Instalações Eléctricas', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Máquinas Eléctricas', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Metalomecânica', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Química', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Laboratórios de Telecomunicações', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Oficinas de Construções Mecânicas', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Oficinas de Máquinas e Motores', functionalAmount: 1, nonFunctionalAmount: 1 },
    { name: 'Oficinas de Soldadura', functionalAmount: 1, nonFunctionalAmount: 1 }
  ];

  get total(){
    return this.infraFormModel.functionalAmount + this.infraFormModel.nonFunctionalAmount;
  }

  onSubmit(form: NgForm){
    this.infras.push(form.value);
    this.resetForm(form);
  }

  trimName(){
    this.infraFormModel.name = this.infraFormModel.name.trim();
  }

  resetForm(form: NgForm){
    form.reset();
    this.cdRef.detectChanges();
    this.infraFormModel.functionalAmount = 0;
    this.infraFormModel.nonFunctionalAmount = 0;
  }
}
