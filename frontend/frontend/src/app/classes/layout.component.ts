import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
    templateUrl: 'layout.component.html',
    styleUrls: ['./layout.component.css'],
    animations: [ slideInAnimation ]
})
export class LayoutComponent { 
    getAnimationData(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}