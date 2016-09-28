import {Component, Input} from '@angular/core';
// import {PlannedExpensesService} from '../../core/services/plannedExpenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';

@Component({
  selector: 'main-header-navbar',
  templateUrl: 'build/components/headerNavbar/mainHeaderNavbar.component.html',
  // providers: [ExpensesService]
})
export class MainHeaderNavbarComponent {
  @Input()
  headerPageTitle: string;
  constructor() {
  }
}
