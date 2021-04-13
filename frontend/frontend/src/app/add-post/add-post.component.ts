import { Component } from '@angular/core';
import { AddPostService } from './add-post.service';  //???
import { Post } from '../models/post.model';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../service/common.service';

public post : Post;
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent {
    public post : Post;
 
    constructor(private addPostService: AddPostService) {
        this.post = new Post();
    }
   
    addPost() {
        if(this.post.title && this.post.description){
          this.addPostService.addPost(this.post).subscribe(res =>{
          this.closeBtn.nativeElement.click();
          this.commonService.notifyPostAddition();
          });
        } else {
          alert('Title and Description required');
        }
      }

    @ViewChild('closeBtn') closeBtn: ElementRef;
 
}