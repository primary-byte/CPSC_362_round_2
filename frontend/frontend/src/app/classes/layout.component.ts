import { classes } from './sort-courses';

import {Component} from '@angular/core';

@Component({
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css']
})

export class LayoutComponent { 
    public searchInput: string;
    public classes = classes;
}