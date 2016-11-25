import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {AuthProviders, AuthMethods, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
import {ExpensesService} from '../../core/services/expenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';
// import {NewExpensesComponent} from '../../components/expenses/newExpenses.component';
import {MainHeaderNavbarComponent} from '../../components/headerNavbar/mainHeaderNavbar.component';
// import {FormGroup} from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {LoginPage} from '../login/login';
import {PlanDistribution} from '../planDistribution/planDistribution';
// import {AuthService} from '../../core/services/auth.service';
import {BasePage} from '../base/base.page';

import {ChartDirective} from '../../components/charts/ChartJS.directive';
import {IChartData, ChartData, LineChart, ChartDataSet, ChartPoint} from '../../components/charts/chartjs.data';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: 'build/pages/planInitialize/planInitialize.html',
  directives: [MainHeaderNavbarComponent, ChartDirective],
  providers: [ExpensesService]
})
export class PlanInitialize extends BasePage {

  amount: number;
  form: FormGroup;
  data: any;
  expensesList: FirebaseListObservable<IExpenses[]>;

  months: any[] = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  showDetails: boolean = false;

  lineChart: Observable<LineChart>;

  constructor(public navCtrl: NavController, private modal: ModalController, private expensesService: ExpensesService) {

    super("Initilization");

    this.form = this.buildControls();

    this.buildChart();

  }

  buildChart() {

    this.expensesList = this.expensesService.get();

    this.lineChart = this.form.valueChanges
      .debounceTime(500)
      .map(next => {

        var lc = new LineChart();
        lc.type = 'line';

        var incomesData: ChartDataSet = new ChartDataSet();
        incomesData.data = [];

        var expensesData: ChartDataSet = new ChartDataSet();
        expensesData.data = [];

        var keptData: ChartDataSet = new ChartDataSet();
        keptData.data = [];

        var acumData: ChartDataSet = new ChartDataSet();
        acumData.data = [];
        let acum: number = 0;

        this.months.forEach((e) => {
          incomesData.data.push({ x: e, y: this.incomes });
          expensesData.data.push({ x: e, y: this.expenses });
          keptData.data.push({ x: e, y: this.incomes - this.expenses });

          if (this.months[new Date().getMonth()] == e) {
            acum += +this.initial;
          }

          acum += +this.incomes - +this.expenses;
          acumData.data.push({ x: e, y: acum });
        });

        var total = [incomesData, expensesData, keptData, acumData]

        var chartData: ChartData = new ChartData(total, this.months);

        lc.data = chartData;

        return lc;

      });
  }

  incomes: number = 0;
  expenses: number = 0;
  initial: number = 0;

  buildControls(): FormGroup {
    return new FormGroup({
      incomes: new FormControl(0, Validators.required),
      expenses: new FormControl(0, Validators.required),
      initial: new FormControl(0)
    });
  }

  add() {
    if (this.save()) {
      this.navCtrl.push(PlanDistribution);
    }
  }

  save() {
    //saved
    return true;
  }
}
