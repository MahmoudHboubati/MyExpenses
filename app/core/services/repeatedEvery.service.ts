import {RepeateEveryLookup} from '../domain/repeatedEvery.lookup';
import {LookupService} from './generic.service';
import {Observable} from 'rxjs/Rx.KitchenSink';

export class ScheduleTypeService extends LookupService<RepeateEveryLookup> {
  private scheduleTypes: RepeateEveryLookup[];
  private list: Observable<RepeateEveryLookup[]>;

  type: string = 'dropdown';

  get(): Observable<RepeateEveryLookup[]> {
    return this.list;
  }

  constructor() {
    super();

    this.list = Observable.create(this.scheduleTypes);
    var daily: RepeateEveryLookup = { id: 1, title: 'Daily', isActive: true, createdAt: new Date() };
    var weekly: RepeateEveryLookup = { id: 4, title: 'Weekly', isActive: true, createdAt: new Date() };
    var monthly: RepeateEveryLookup = { id: 2, title: 'Monthly', isActive: true, createdAt: new Date() };
    var yearly: RepeateEveryLookup = { id: 3, title: 'Yearly', isActive: true, createdAt: new Date() };

    this.scheduleTypes.push(daily);
    this.scheduleTypes.push(weekly);
    this.scheduleTypes.push(monthly);
    this.scheduleTypes.push(yearly);
  }
}
