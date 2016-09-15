import {GenericService} from './generic.service';
import {FirebaseListObservable} from 'angularfire2';
import {FirebaseList, IFirebaseEntity} from '../domain/firebase.entity';
import {AuthService} from './auth.service';

export abstract class FirebaseService<TFirebaseEntity extends IFirebaseEntity> extends GenericService<TFirebaseEntity, FirebaseList<TFirebaseEntity>> {
  constructor(private _authService: AuthService) {
    super()
  }
  add(p: TFirebaseEntity) {

    var uid = this._authService.uid;

    if (uid) {
      p.createdBy = uid;
    }

    this.get().push(p);
  }
}
