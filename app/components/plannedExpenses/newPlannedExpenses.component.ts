
import {Component} from '@angular/core';
// import {PlannedExpensesService} from '../../core/services/plannedExpenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';

@Component({
  selector: 'new-planned-expenses',
  templateUrl: 'build/components/plannedExpenses/newPlannedExpenses.component.html',
  // providers: [ExpensesService]
})
export class NewPlannedExpensesComponent {

  name: string;
  description: string;
  amount: number;
  at: string;

  constructor() {
  }
}
