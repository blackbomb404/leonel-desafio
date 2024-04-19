import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-infraestructure',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './infraestructure.component.html',
  styles: ``
})
export class InfraestructureComponent {
  @Input() name = 'Salas de Aula Teóricas';
  @Input() functionalAmount = 0;
  @Input() nonFunctionalAmount = 0;
  @Input() inputsDisabled = false;
  @Input() inEditMode = false;

  resetFunctionalAmount(){
    if(this.functionalAmount < 0){
      this.functionalAmount = 0;
    }
  }
  resetNonFunctionalAmount(){
    if(this.nonFunctionalAmount < 0){
      this.nonFunctionalAmount = 0;
    }
  }

  get total(){
    return this.functionalAmount + this.nonFunctionalAmount;
  }

  trimName(){
    this.name = this.name.trim();
  }

  toggleEditMode(){
    if(this.inEditMode){
      this.trimName();
      if(this.name.length === 0){
        return;
      }
    }
    this.inEditMode = !this.inEditMode;
  }
}
