import {IGenericEntity} from './generic.entity';
export interface ILookupEntity extends IGenericEntity {
  title: string;
}

export class LookupEntity implements ILookupEntity {
  title: string;
  createdAt: Date;
  isActive: boolean;
}
