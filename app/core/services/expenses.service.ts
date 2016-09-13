import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {GenericService} from './generic.service';
import {IGenericEntity} from '../domain/generic.entity';
import {FirebaseService} from './firebase.service';
import {IExpenses} from '../domain/expenses.entity';
@Injectable()
export class ExpensesService extends FirebaseService<IExpenses> {
  constructor(private af: AngularFire) {
    super();
  }
  get() {
    return this.af.database.list('/expenses');
  }
}
