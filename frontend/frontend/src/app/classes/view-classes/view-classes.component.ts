import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewClassesDetailComponent } from './../view-classes-detail/view-classes-detail.component';

import { Course } from '../course';
import { COURSES } from './../mock-courses';

@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.css']
})
export class ViewClassesComponent implements OnInit {

  courses = COURSES;
  selectedCourse?: Course;
  id = COURSES.id;
  name = COURSES.name;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    const dialogRef = this.dialog.open(ViewClassesDetailComponent, {
      width: '250px',
      data: { id:this.id, name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.id = result;
      this.name = result.name;
    });
  }
}
