import { Component, OnInit } from '@angular/core';
import { Teacher } from '../teacher';
import { TEACHERS } from '../mock-teachers';

@Component({
  selector: 'app-view-teachers',
  templateUrl: './view-teachers.component.html',
  styleUrls: ['./view-teachers.component.css']
})
export class ViewTeachersComponent implements OnInit {

  teachers = TEACHERS;
  selectedTeacher?: Teacher;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(teacher: Teacher): void {
    this.selectedTeacher = teacher;
  }
}
