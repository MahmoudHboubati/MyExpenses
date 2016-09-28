import {Component} from '@angular/core';
import {BasePage} from '../base/base.page';
import {NewPlannedExpensesComponent} from '../../components/plannedExpenses/newPlannedExpenses.component';

@Component({
  templateUrl: 'build/pages/plannedExpenses/plannedExpenses.page.html',
  directives: [NewPlannedExpensesComponent]
})
export class PlannedExpensesPage extends BasePage {

}
