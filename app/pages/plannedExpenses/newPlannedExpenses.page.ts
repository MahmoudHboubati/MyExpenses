import {Component, OnInit} from '@angular/core';
import {BasePage} from '../base/base.page';
import {NewPlannedExpensesComponent} from '../../components/plannedExpenses/newPlannedExpenses.component';
import {MainHeaderNavbarComponent} from '../../components/headerNavbar/mainHeaderNavbar.component';
import {ListPlannedExpensesPage} from './listPlannedExpenses.page';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/plannedExpenses/newPlannedExpenses.page.html',
  directives: [NewPlannedExpensesComponent, MainHeaderNavbarComponent]
})
export class NewPlannedExpensesPage extends BasePage implements OnInit {

  constructor(public navCtrl: NavController) {
    super("New Expenses Plan");
  }

  ngOnInit() {
  }
}
