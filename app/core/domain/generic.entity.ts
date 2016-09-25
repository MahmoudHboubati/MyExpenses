export interface IGenericEntity {
  id: string;
  createdBy: string;
  createdAt: Date;
  isActive: boolean;
}

export interface IGenericEntityList<T> {
}

export abstract class GenericEntity implements IGenericEntity {
  id: string;
  createdBy: string;
  createdAt: Date;
  isActive: boolean;
}
