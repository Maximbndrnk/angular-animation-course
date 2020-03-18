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

const animationRoutes: Routes = [
  {
    path: 'animation-home',
    component: HomeComponent
  },
  {
    path: 'animation-basics',
    component: BasicComponent
  },
  {
    path: 'animation-contained',
    component: ContainedComponent
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    AdvancedComponent,
    ContainedComponent,
    AnimboxComponent
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
