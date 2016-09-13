
import { Component } from '@angular/core';
import {ExpensesService} from '../../core/services/expenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';


@Component({
  selector: 'new-expenses',
  templateUrl: 'build/pages/home/newExpenses.component.html',
  providers: [ExpensesService]
})
export class NewExpensesComponent {

  name: string;
  description: string;
  amount: number;
  at: string;

  constructor(private _expensesService: ExpensesService) {
  }

  addNew() {
    var item: IExpenses = {
      amount: this.amount,
      at: this.at,
      createdAt: new Date(),
      isActive: true
    };
    this._expensesService.add(item);
  }
}
