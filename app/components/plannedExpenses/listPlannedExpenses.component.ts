import {Component} from '@angular/core';
// import {PlannedExpensesService} from '../../core/services/plannedExpenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';

@Component({
  selector: 'list-planned-expenses',
  templateUrl: 'build/components/plannedExpenses/listPlannedExpenses.component.html',
  // providers: [ExpensesService]
})
export class ListPlannedExpensesComponent {

  constructor() {
  }
}
