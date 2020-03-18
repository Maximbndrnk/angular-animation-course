import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { AdvacedComponent } from './advaced/advaced.component';
import { ContainedComponent } from './contained/contained.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    AdvacedComponent,
    ContainedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
