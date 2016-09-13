import {IFirebaseEntity, IFirebaseEntityList} from './firebase.entity';

export interface IExpenses extends IFirebaseEntity {
  amount: number;
  at: string;
}

export interface IExpensesList extends IFirebaseEntityList<IExpenses> {
}
