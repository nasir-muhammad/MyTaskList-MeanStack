import { Component } from '@angular/core';
import { TaskService } from './taskservice.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers:[ TaskService ]
})

export class AppComponent { }
