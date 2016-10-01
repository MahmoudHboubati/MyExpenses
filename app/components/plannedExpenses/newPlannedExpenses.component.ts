import {Component} from '@angular/core';
import {PlannedExpensesService} from '../../core/services/plannedExpenses.service';
import {IPlannedExpenses, PlannedExpenses} from '../../core/domain/plannedExpenses.entity';
import {FormComponent} from '../base/formComponent.component';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'new-planned-expenses',
  templateUrl: 'build/components/plannedExpenses/newPlannedExpenses.component.html',
  providers: [PlannedExpensesService]
})
export class NewPlannedExpensesComponent extends FormComponent<IPlannedExpenses> {

  description: string;
  amount: number;
  startDate: Date;

  constructor(private _plannedExpensesService: PlannedExpensesService) {
    super();
  }

  buildControls(): FormGroup {
    return new FormGroup({
      description: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required)
    });
  }

  add() {
    this._plannedExpensesService.add(this.createEntity());
  }

  createEntity(): IPlannedExpenses {
    var entity: PlannedExpenses = new PlannedExpenses();
    console.log('this.description: ' + this.description)
    entity.description = this.description;
    entity.startDate = this.startDate;
    entity.amount = this.amount;
    return entity;
  }
}
