import { Component, ViewEncapsulation } from '@angular/core';
import { slideAnimation } from './animations';
import { transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routerAnimations', [
      transition('* => *', slideAnimation)
    ])
  ]
})
export class AppComponent {
  title = 'angular-animation-tutorial';

  prepareRouteTransition(outlet) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation.value || null;
  }

}
