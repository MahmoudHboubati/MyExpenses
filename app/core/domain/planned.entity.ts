// import {FirebaseEntity} from './firebase.entity';
import {IGenericEntity, GenericEntity} from './generic.entity';

export interface IPlanned extends IGenericEntity {
    name: string;
    description: string;
    repeateEveryId: string;
}

export class Planned extends GenericEntity implements IPlanned {
    name: string;
    description: string;
    repeateEveryId: string;
}
