import {IFirebaseEntity} from './firebase.entity';
import {IPlanned, Planned} from './planned.entity';

export interface IPlannedExpenses extends IPlanned {
  startDate: Date;
  endDate: Date;
  amount: number;
}

export class PlannedExpenses extends Planned implements IPlannedExpenses {
  startDate: Date;
  endDate: Date;
  amount: number;
}
