import {GenericService} from './generic.service';
import {FirebaseListObservable} from 'angularfire2';
import {IGenericEntity} from '../domain/generic.entity';
import {FirebaseList, IFirebaseEntity} from '../domain/firebase.entity';

export abstract class FirebaseService<TFirebaseEntity extends IFirebaseEntity> extends GenericService<TFirebaseEntity, FirebaseList<TFirebaseEntity>> {
  constructor() {
    super()
  }
  add(p: TFirebaseEntity) {
    this.get().push(p);
  }
}
