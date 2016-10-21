import {Component, OnInit} from '@angular/core';
import {BasePage} from '../base/base.page';
import {MainHeaderNavbarComponent} from '../../components/headerNavbar/mainHeaderNavbar.component';
import {ListPlannedExpensesComponent} from '../../components/plannedExpenses/listPlannedExpenses.component';
import {NavController} from 'ionic-angular';
import {NewPlannedExpensesPage} from './newPlannedExpenses.page';

@Component({
  templateUrl: 'build/pages/plannedExpenses/listPlannedExpenses.page.html',
  directives: [ListPlannedExpensesComponent, MainHeaderNavbarComponent]
})
export class ListPlannedExpensesPage extends BasePage implements OnInit {

  constructor(public navCtrl: NavController) {
    super("Expenses Plan");
  }

  ngOnInit() {
  }

  addPageClick() {
    this.navCtrl.setRoot(NewPlannedExpensesPage);
  }
}
