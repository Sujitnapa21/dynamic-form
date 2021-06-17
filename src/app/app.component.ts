import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dynamic-form';
  questionBases: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionControlService) {
    this.questionBases = service.getQuestionBases();
  }
}
