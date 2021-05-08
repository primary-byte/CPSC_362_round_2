import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {  ShowPostsComponent } from './../show-posts/show-posts.component';

@Component({ 
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent { 

}