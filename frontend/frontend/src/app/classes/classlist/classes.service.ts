import { Injectable } from '@angular/core';

import { fromEventPattern, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Classes } from './classes';
import { CLASSLIST } from './classList';


@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }

  getClassList(): Observable<Classes[]> {
    return of(CLASSLIST);
  }

  getClasses(id: number | string) {
    return this.getClassList().pipe (
      map((classList: Classes[]) => classList.find(classes => classes.id === +id))
    );
  }
}
