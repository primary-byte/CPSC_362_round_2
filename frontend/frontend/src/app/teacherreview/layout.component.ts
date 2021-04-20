import { teachers } from './sort-teachers';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent { 
    public searchInput: string;
    public teachers = teachers;
}
