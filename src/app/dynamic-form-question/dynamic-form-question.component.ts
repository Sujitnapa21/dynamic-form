import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() questionBases: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = ' ';

  constructor(private questionService: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.questionService.toFormGroup(this.questionBases);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
