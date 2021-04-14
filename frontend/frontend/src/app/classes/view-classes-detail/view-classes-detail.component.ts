import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-view-classes-detail',
  templateUrl: './view-classes-detail.component.html',
  styleUrls: ['./view-classes-detail.component.css']
})
export class ViewClassesDetailComponent implements OnInit {

  @Input() course?: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
