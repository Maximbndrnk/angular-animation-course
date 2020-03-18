import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { ContainedComponent } from './contained/contained.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimboxComponent } from './animbox/animbox.component';
import { MouseComponent } from './mouse.component';
import { FadeBlockComponent } from './fadeblock.component';

const animationRoutes: Routes = [
  {
    path: 'animation-home',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home'
      }
    },
  },
  {
    path: 'animation-basics',
    component: BasicComponent,
    data: {
      animation: {
        value: 'basic'
      }
    },
  },
  {
    path: 'animation-contained',
    component: ContainedComponent,
    data: {
      animation: {
        value: 'contained'
      }
    },
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent,
    data: {
      animation: {
        value: 'advanced'
      }
    },
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full',
    data: {
      animation: {
        value: 'home'
      }
    },
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    AdvancedComponent,
    ContainedComponent,
    AnimboxComponent,
    MouseComponent,
    FadeBlockComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
