import {Component} from '@angular/core';
import {ControlGroup, Control} from '@angular/common';
import {PlannedExpensesService} from '../../core/services/plannedExpenses.service';
import {IPlannedExpenses, PlannedExpenses} from '../../core/domain/plannedExpenses.entity';
import {FormComponent} from '../base/formComponent.component';

@Component({
  selector: 'new-planned-expenses',
  templateUrl: 'build/components/plannedExpenses/newPlannedExpenses.component.html',
  providers: [PlannedExpensesService]
})
export class NewPlannedExpensesComponent extends FormComponent<IPlannedExpenses> {

  description: string;
  amount: number;


  constructor(private _plannedExpensesService: PlannedExpensesService) {
    super();
  }

  buildControls() {
    {
      return {
        description: new Control(),
        amount: new Control(),
      };
    }
  }

  add() {
    this._plannedExpensesService.add(this.createEntity());
  }

  createEntity(): IPlannedExpenses {
    var entity: PlannedExpenses = new PlannedExpenses();
    entity.description = this.description;
    entity.startDate = new Date();
    return entity;
  }
}
