import { TEACHERDETAILS } from './../mock-teachers';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherDetails } from '../../_models/teacher-details';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  teacherDetails: TeacherDetails;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teacherDetails = TEACHERDETAILS.find(teacherDetails => teacherDetails.id === id);
  }

}
