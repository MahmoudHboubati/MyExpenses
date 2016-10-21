import {Observable} from 'rxjs/Observable';
import {IGenericEntity} from '../domain/generic.entity';
import {ILookupEntity} from '../domain/lookup.entity';
import {AngularFire, FirebaseAuthState, AuthProviders, AuthMethods} from 'angularfire2';
import { Inject } from '@angular/core';

export abstract class BaseService {

  // constructor( @Inject(AngularFire) private af: AngularFire) { }
  logError(error, data) {
    // const itemObservable = this.af.database.object('/errors/');
    // itemObservable.set({
    //   "error": error,
    //   "data": data
    // })
  }
}

export abstract class GenericService<TEntity extends IGenericEntity, TObservable extends Observable<TEntity[]>> extends BaseService {
  abstract get(): TObservable;
  constructor() {
    super();
  }
}

export abstract class LookupService<TEntity extends ILookupEntity> extends GenericService<TEntity, Observable<TEntity[]>> {
  constructor() {
    super();
  }
}
