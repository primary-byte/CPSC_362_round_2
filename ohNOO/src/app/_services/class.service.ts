import { environment } from './../../environments/environment';
import { CourseDetails } from './../_models/course-details';
import { Course } from './../_models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, finalize } from 'rxjs/operators';


const baseUrl = `${environment.apiUrl}/classes`;

@Injectable({ providedIn: 'root' })
export class ClassService {
    constructor(
        private http:HttpClient
    ) {

    }
    getCourses() {
        return this.http.get<Course[]>(baseUrl);
    }
    getCourseDetails() {
        return this.http.get<CourseDetails[]>(baseUrl);
    }

}
