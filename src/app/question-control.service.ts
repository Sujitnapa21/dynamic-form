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
        key: 'age',
        label: 'Age',
        required: true,
        order: 2
      }),

      new QuestionBase<string>({
        controlType: "textbox",
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validator: "email",
        order: 3
      }),

      new QuestionBase<string>({
        controlType: "dropdown",
        key: 'vote',
        label: 'Vote',
        options: [
          {key: 'exo',  value: 'EXO'},
          {key: 'rvv',  value: 'Red Velvet'},
          {key: 'other',   value: 'Other'}
        ],
        order: 4
      }),


      new QuestionBase<string>({
        controlType: "textarea",
        key: 'message',
        label: 'Message',
        type: 'textarea',
        order: 5
      }),

      // new QuestionBase<string>({
      //   controlType: "checkbox",
      //   key: 'agree',
      //   label: 'I accept terms and services',
      //   type: 'checkbox',
      //   required: true,
      //   order: 6
      // }),

      // new QuestionBase<string>({
      //   controlType: "radio",
      //   key: 'sex',
      //   label: 'Sex',
      //   type: 'radio',
      //   options: [
      //     {key: 'male',  value: 'Male'},
      //     {key: 'female',  value: 'Female'}
      //   ],
      //   order: 7
      // }),
    ];

    



    return of(inputs.sort((a, b) => a.order - b.order));
  }

}
