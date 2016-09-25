import {LookupEntity, ILookupEntity} from './lookup.entity';

export class RepeateEveryLookup extends LookupEntity implements ILookupEntity {
  second: number;
  minute: number;
  houre: number;
  day: number;
  month: number;
  year: number;
}
