import {Component} from '@angular/core';
import {PlannedExpensesService} from '../../core/services/plannedExpenses.service';
import {PlannedExpenses} from '../../core/domain/plannedExpenses.entity';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'list-planned-expenses',
  templateUrl: 'build/components/plannedExpenses/listPlannedExpenses.component.html',
  providers: [PlannedExpensesService]
})
export class ListPlannedExpensesComponent {

  plannedExpenses: FirebaseListObservable<PlannedExpenses[]>;

  constructor(private plannedExpensesService: PlannedExpensesService) {
    this.plannedExpenses = plannedExpensesService.get();
  }
}
