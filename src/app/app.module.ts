import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { DisplayComponent } from './components/display/display.component';
import { ProgressComponent } from './components/progress/progress.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    DisplayComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
