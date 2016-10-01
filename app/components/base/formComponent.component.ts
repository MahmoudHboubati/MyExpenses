import {FormGroup} from '@angular/forms';

export abstract class FormComponent<TEntity> {

  form: FormGroup;

  abstract buildControls(): FormGroup;
  abstract add();
  abstract createEntity(): TEntity;

  constructor() {
    this.form = this.buildControls();
  }
}
