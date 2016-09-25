import {LookupEntity, ILookupEntity} from './lookup.entity';

export class RepeateEveryLookup extends LookupEntity implements ILookupEntity {
  private second: number;
  private minute: number;
  private houre: number;
  private days: number;
  private month: number;
  private year: number;

  constructor(days: number) {
    super();

    this.days = days;
  }
}
