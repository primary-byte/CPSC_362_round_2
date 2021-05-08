import { COURSES } from './mock-course-list';
import { QUESTIONS } from './mock-questions';
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css']
})

export class LayoutComponent { 

    question: string;
    course: string;
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '500px',
            data: {question: this.question, course: this.course}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.course = result;
    });
    }
}
