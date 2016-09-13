import {Observable} from 'rxjs/Observable';
import {IGenericEntity} from '../domain/generic.entity';
import {ILookupEntity} from '../domain/lookup.entity';

export abstract class GenericService<TEntity extends IGenericEntity, TObservable extends Observable<TEntity[]>> {
  abstract get(): TObservable;
}

export abstract class LookupService<TEntity extends ILookupEntity> extends GenericService<TEntity, Observable<TEntity[]>> {
  constructor() {
    super();
  }
}
