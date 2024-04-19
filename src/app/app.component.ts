import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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

  ngAfterViewInit(): void {
    // (this.dialogRef.nativeElement as HTMLDialogElement).showModal();
  }

  headers = ['Designação', 'Funcionais', 'Não Funcionais', 'Número Total'];
  infras: Infraestructure[] = [
    { name: 'Salas de Aula Teóricas', functionalAmount: 0, nonFunctionalAmount: 0 },
    { name: 'Salas de Informática', functionalAmount: 0, nonFunctionalAmount: 0 },
    { name: 'Laboratórios de Automação', functionalAmount: 0, nonFunctionalAmount: 0 },
    { name: 'Laboratórios de Biologia', functionalAmount: 0, nonFunctionalAmount: 0 },
    { name: 'Laboratórios de CAD', functionalAmount: 0, nonFunctionalAmount: 0 },
    { name: 'Oficinas de Construções Mecânicas', functionalAmount: 0, nonFunctionalAmount: 0 },
    { name: 'Oficinas de Máquinas e Motores', functionalAmount: 0, nonFunctionalAmount: 0 }
  ];

  get total(){
    return this.infraFormModel.functionalAmount + this.infraFormModel.nonFunctionalAmount;
  }

  onSubmit(form: NgForm){
    this.infras.push(form.value);
    form.resetForm();
  }

  trimName(){
    this.infraFormModel.name = this.infraFormModel.name.trim();
  }
}
