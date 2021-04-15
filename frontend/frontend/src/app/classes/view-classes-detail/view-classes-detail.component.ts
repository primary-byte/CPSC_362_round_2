import { ViewClassesComponent } from './../view-classes/view-classes.component';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../course';

@Component({
  selector: 'app-view-classes-detail',
  templateUrl: './view-classes-detail.component.html',
  styleUrls: ['./view-classes-detail.component.css']
})
export class ViewClassesDetailComponent {

  name: any;
  
  constructor(    
    public dialogRef: MatDialogRef<ViewClassesDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close({
        name: this.name
      });
    }
}

