import { Component, Output, EventEmitter } from '@angular/core';
import { QUESTIONS } from '../mock-questions';
import { Question } from '../question';
import { Course } from './../../classes/course';
import { COURSES } from './../../classes/mock-courses';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {

  @Output() newCourseEvent = new EventEmitter<number>();
  @Output() newQuestionEvent = new EventEmitter<string>();

  questions = QUESTIONS;
  courses = COURSES;

  submitted = false;

  onSubmit() { this.submitted = true; }

  addNewQuestion(course: number, question: string) {
    this.newCourseEvent.emit(course);
    this.newQuestionEvent.emit(question);
  }
}