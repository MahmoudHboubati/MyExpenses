import {IGenericEntity, GenericEntity} from './generic.entity';

export interface ILookupEntity extends IGenericEntity {
  title: string;
}

export class LookupEntity extends GenericEntity implements ILookupEntity {
  title: string;
  createdBy: string;
  createdAt: Date;
  isActive: boolean;
}
