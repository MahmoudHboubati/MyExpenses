import {IGenericEntity} from './generic.entity';
import {FirebaseListObservable} from 'angularfire2';

export interface IFirebaseEntity extends IGenericEntity {
}
export interface IFirebaseEntityList<T> {
}

export class FirebaseEntity implements IFirebaseEntity {
  id: string;
  createdBy: string;
  createdAt: Date;
  isActive: boolean;
}
export class FirebaseList<T> extends FirebaseListObservable<T[]> {
}
