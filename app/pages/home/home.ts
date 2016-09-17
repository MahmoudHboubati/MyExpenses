import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {AuthProviders, AuthMethods, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
import {ExpensesService} from '../../core/services/expenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';
import {NewExpensesComponent} from '../../components/expenses/newExpenses.component';

import {LoginPage} from '../login/login';
import {AuthService} from '../../core/services/auth.service';

import {ChartDirective} from '../../components/charts/ChartJS.directive';
import {IChartData, ChartData, LineChart} from '../../components/charts/chartjs.data';
import {Observable} from 'rxjs';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [NewExpensesComponent, ChartDirective],
  providers: [ExpensesService]
})
export class HomePage {
  expenses: any;
  authInfo: any;
  displayName: any;
  buttonTitle = "LOGIN";

  data: Observable<IChartData>;
  lineChart: LineChart;

  constructor(public navCtrl: NavController,
    private _expensesService: ExpensesService,
    private modal: ModalController,
    private _authService: AuthService) {
    this.expenses = _expensesService.get();
    this.authInfo = _authService.getAuthInfo();

    this.lineChart = new LineChart();

    this.data = this.expenses.map((next) => {

      var months: any[] = [];
      var totalExpenses: number[] = [];

      Observable.from<IExpenses>(next).groupBy((k) => {
        return new Date(k.at).getMonth() + 1;
      }).map((a) => {
        months.push(a.key);
        var sum = 0;
        a.subscribe((s) => {
          sum += s.amount;
        }, () => { }, () => {
          totalExpenses.push(sum);
        });
      }).subscribe();

      var chartData: ChartData = new ChartData(totalExpenses, months.sort());
      return chartData;
    });
  }

  /**
   * logs out the current user
   */
  logout() {
    this._authService.logout();
    // this.navCtrl.push(LoginPage);
  }
}
