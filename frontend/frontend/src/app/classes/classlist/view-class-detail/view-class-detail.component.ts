import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Classes } from '../classes';
import { ClassesService } from './../classes.service';


@Component({
  selector: 'app-view-class-detail',
  templateUrl: './view-class-detail.component.html',
  styleUrls: ['./view-class-detail.component.css']
})
export class ViewClassDetailComponent implements OnInit {
  classes$: Observable<Classes>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ClassesService
  ) { }

  ngOnInit() {
    this.classes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getClasses(params.get('id')))
    );
  }
  gotoClassList(classes: Classes) {
    const classesId = classes ? classes.id : null;
    this.router.navigate(['/courses', { id: classesId }]);
  }

}
