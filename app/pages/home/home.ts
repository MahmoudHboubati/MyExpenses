import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
// import {AuthProviders, AuthMethods, FirebaseAuthState, FirebaseListObservable} from 'angularfire2';
// import {ExpensesService} from '../../core/services/expenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';
// import {NewExpensesComponent} from '../../components/expenses/newExpenses.component';
import {MainHeaderNavbarComponent} from '../../components/headerNavbar/mainHeaderNavbar.component';
// import {FormGroup} from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {LoginPage} from '../login/login';
// import {AuthService} from '../../core/services/auth.service';
import {BasePage} from '../base/base.page';

// import {Observable} from 'rxjs';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [MainHeaderNavbarComponent],
  // directives: [MainHeaderNavbarComponent]
  // providers: [ExpensesService]
})
export class HomePage extends BasePage {
  expenses: any;
  authInfo: any;
  displayName: any;
  buttonTitle = "LOGIN";
  amount: number;
  form: FormGroup;

  // headerPageTitle: string = "Home";

  constructor(public navCtrl: NavController,
    // private _expensesService: ExpensesService,
    private modal: ModalController/*,
    private _authService: AuthService*/) {
    // this.expenses = _expensesService.get();
    // this.authInfo = _authService.getAuthInfo();
    super("Home");

    this.form =
       new FormGroup({

        amount: new FormControl('', Validators.required),

      });
  }

  /**
   * logs out the current user
   */
  logout() {
    // this._authService.logout();
    // this.navCtrl.push(LoginPage);
  }
}
