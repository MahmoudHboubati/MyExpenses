import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import {AuthProviders, AuthMethods, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
import {ExpensesService} from '../../core/services/expenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';
import {NewExpensesComponent} from '../../components/expenses/newExpenses.component';

import {LoginPage} from '../login/login';
import {AuthService} from '../../core/services/auth.service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [NewExpensesComponent],
  providers: [ExpensesService]
})
export class HomePage {
  expenses: any;
  authInfo: any;
  displayName: any;
  buttonTitle = "LOGIN";

  constructor(public navCtrl: NavController,
    private _expensesService: ExpensesService,
    private modal: ModalController,
    private _authService: AuthService) {
    this.expenses = _expensesService.get();
    this.authInfo = _authService.getAuthInfo();
  }

  /**
   * logs out the current user
   */
  logout() {
    this._authService.logout();
    // this.navCtrl.push(LoginPage);
  }
}
