import { Component, OnInit } from '@angular/core';
import { Teacher } from './../teacher';
import { TEACHERLIST } from './../teacherList';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.component.html',
  styleUrls: ['./view-teachers.component.css']
})
export class ViewTeachersComponent implements OnInit {

  teacherList = TEACHERLIST;
  selectedTeacher?: Teacher;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(teacher: Teacher): void {
    this.selectedTeacher = teacher;
  }
}
