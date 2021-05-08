import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/post';

const baseUrl = `${environment.apiUrl}/accounts`

@Injectable()
export class ShowPostService {

    constructor(private http: HttpClient){
 
    }

    getAllPosts(){
        return this.http.get(`${baseUrl}/show-post`,{})
    }   
 
}