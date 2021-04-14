import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Classes } from '../classes';
import { ClassesService } from '../classes.service';

@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.css']
})
export class ViewClassesComponent implements OnInit {
  classList$: Observable<Classes[]>;
  selectedId: number;

  constructor(
    private service: ClassesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.classList$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getClassList();
      })
    );
  }
}
