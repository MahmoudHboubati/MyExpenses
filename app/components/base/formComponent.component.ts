import {ControlGroup, Control} from '@angular/common';

export abstract class FormComponent<TEntity> {
  protected form = new ControlGroup(this.buildControls());
  abstract buildControls();
  abstract add();
  abstract createEntity(): TEntity;
}
