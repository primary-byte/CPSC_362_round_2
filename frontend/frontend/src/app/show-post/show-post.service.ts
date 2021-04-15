import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from './../_models/post';

const baseUrl = `${environment.apiUrl}/posts`;

@Injectable()
export class ShowPostService {
 
    constructor(private http: HttpClient){
 
    }
    getAllPost(){return this.http.get<Post>(`${baseUrl}/getAllPost`,{})
    }   
 
}