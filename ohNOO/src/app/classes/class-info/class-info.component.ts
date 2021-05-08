import { ClassService } from './../../_services/class.service';
import { CLASSDETAILS } from './../mock-courses';
import { CourseDetails } from './../../_models/course-details';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.css']
})
export class ClassInfoComponent implements OnInit {

  classDetails: CourseDetails;
  responseData: object

  constructor(
    private route: ActivatedRoute,
    private classDetail: ClassService,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.classDetails = CLASSDETAILS.find(classDetails => classDetails.id === id);

    //possible transfer to get data from databse
    this.classDetail.getCourseDetails().subscribe((data) => {
      this.responseData = data
    }, (err) => {
      throw err
    })
  }

}
