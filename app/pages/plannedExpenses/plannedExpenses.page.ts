import {Component} from '@angular/core';
import {BasePage} from '../base/base.page';
import {NewPlannedExpensesComponent} from '../../components/plannedExpenses/newPlannedExpenses.component';
import {MainHeaderNavbarComponent} from '../../components/headerNavbar/mainHeaderNavbar.component';

@Component({
  templateUrl: 'build/pages/plannedExpenses/plannedExpenses.page.html',
  directives: [NewPlannedExpensesComponent, MainHeaderNavbarComponent]
})
export class PlannedExpensesPage extends BasePage {
  // headerPageTitle: string = "Expenses Plan";
  constructor() {
    super("Expenses Plan");
  }
}
