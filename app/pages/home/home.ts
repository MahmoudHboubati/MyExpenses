import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ExpensesService} from '../../core/services/expenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';
import {NewExpensesComponent} from '../../pages/home/newExpenses.component';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [NewExpensesComponent],
  providers: [ExpensesService]
})
export class HomePage {
  expenses: any;
  constructor(public navCtrl: NavController, _expensesService: ExpensesService) {
    this.expenses = _expensesService.get();
  }
}
