import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { COURSES } from '../mock-courses';

@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.css']
})
export class ViewClassesComponent implements OnInit {

  courses = COURSES
  selectedCourse?: Course;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }
}
