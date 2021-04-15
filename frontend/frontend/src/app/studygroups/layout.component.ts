
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD5T9N9sQz2ykJ3D1DSUAg4Gh2_3vMzXXE",
    databaseURL: "https://thedocs-57744-default-rtdb.firebaseio.com"
};
@Component({
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent { 
    constructor() {
        firebase.initializeApp(config);
    }
}