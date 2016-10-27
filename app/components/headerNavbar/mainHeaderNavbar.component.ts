import {Component, Input, Output, EventEmitter} from '@angular/core';
// import {PlannedExpensesService} from '../../core/services/plannedExpenses.service';
import {IExpenses} from '../../core/domain/expenses.entity';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'main-header-navbar',
  templateUrl: 'build/components/headerNavbar/mainHeaderNavbar.component.html',
  // providers: [ExpensesService]
})
export class MainHeaderNavbarComponent {
  @Input()
  headerPageTitle: string;

  @Input()
  addPageClick: Function;

  @Input()
  backPageClick: Function;

  @Input()
  public addPage: any;

  @Input()
  menuToggle: boolean;

  constructor(public navCtrl: NavController) {
  }
  goToAddPage() {
    this.addPageClick();
  }
}
