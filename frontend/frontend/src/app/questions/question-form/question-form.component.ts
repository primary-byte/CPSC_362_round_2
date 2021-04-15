import { Component } from '@angular/core';
import { QUESTIONS } from '../mock-questions';
import { Question } from '../question';
import { COURSES } from './../mock-course-list';
import { Course } from './../../classes/course';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {

  questions = QUESTIONS;
  courses = COURSES;

  model = new Question(1,this.courses[0].id,'');

}