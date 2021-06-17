import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})

export class DynamicFormInputComponent implements OnInit {

  @Input() input: QuestionBase<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.input.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
