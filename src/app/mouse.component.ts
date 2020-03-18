import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mouse',
  template: `
    <div class="mymouse mx-auto"
         (mouseenter)="setMouse('hover')"
         (mousedown)="setMouse('press')"
         (mouseleave)="setMouse('rest')"
         [@changeState]="currentState">

    </div>
  `,
  styles: [`
    .mymouse {
      background-color: #5c8f52;
      width: 200px;
      height: 200px;
      border-radius: 200px;
      margin: 6rem;
    }
  `]

})

export class MouseComponent {
  currentState = 'rest';

  setMouse(state: string) {
    this.currentState = state;
  }

}


