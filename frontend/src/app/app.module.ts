import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Route } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule ],
  declarations: [ AppComponent,TaskComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
