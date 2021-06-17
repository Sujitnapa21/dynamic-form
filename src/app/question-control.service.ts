import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { QuestionBase } from './question-base'

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  toFormGroup(inputs: QuestionBase<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.validator) {
        case "email":
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                        : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  getQuestionBases() {

    const inputs: QuestionBase<string>[] = [

      new QuestionBase<string>({
        controlType: "textbox",
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new QuestionBase<string>({
        controlType: "textbox",
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validator: "email",
        order: 2
      }),

      new QuestionBase<string>({
        controlType: "dropdown",
        key: 'country',
        label: 'Country',
        options: [
          {key: 'usa',  value: 'United States of America'},
          {key: 'br',  value: 'Brazil'},
          {key: 'other',   value: 'Other'}
        ],
        order: 3
      }),

      new QuestionBase<string>({
        controlType: "checkbox",
        key: 'agree',
        label: 'I accept terms and services',
        type: 'checkbox',
        required: true,
        order: 4
      }),

      new QuestionBase<string>({
        controlType: "radio",
        key: 'sex',
        label: 'Sex',
        type: 'radio',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'}
        ],
        order: 5
      }),

      new QuestionBase<string>({
        controlType: "textarea",
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        order: 6
      }),

      new QuestionBase<string>({
        controlType: "textbox",
        key: 'age',
        label: 'age',
        required: true,
        order: 7
      })
    ];



    return of(inputs.sort((a, b) => a.order - b.order));
  }

}
