import { QUESTIONS } from './mock-questions';
import {Component} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css']
})

export class LayoutComponent { 

    animal: string;
    name: string;
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '250px',
            data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.animal = result;
    });
    }
}
