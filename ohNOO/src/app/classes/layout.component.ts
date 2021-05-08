import { classes } from './sort-courses';

import {Component, Input} from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css']
})

export class LayoutComponent { 
    public searchInput: string;
    public classes = classes;

    @Input() options: string[] = ["100's", "200's", "300's", "400's", "500's",
                                  "Introduction Courses", "Lower-Division Courses", "Upper-Division Courses",
                                  "Electives"];

    toggleSelection(chip: MatChip) {
        chip.toggleSelected();
     }
}