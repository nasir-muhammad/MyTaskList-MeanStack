import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks = [];
  title:string;
  constructor(private _tskservice:TaskService ) { 
  
  }
  ngOnInit() {
    this._tskservice.getTask()
      .subscribe(data => this.tasks = data);
  }
  onSubmit(form:any){
    var newtask = {
      title:this.title,
      isDone:false
    }
    this._tskservice.saveTask(newtask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title="";
      });
  }
  deleteTask(id){
    var task = this.tasks;
    this._tskservice.deleteTask(id)
      .subscribe(data=>{
          console.log('here in delete if condition');
          for(var i=0;i<task.length;i++){
            if(task[i]._id == id){
              this.tasks.splice(i,1);
            }
          }
        console.log(data);
      });
  }

  updateStatus(task){
    var updttask = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };

    this._tskservice.updateTask(updttask)
      .subscribe(res => {
        task.isDone = !task.isDone;
        console.log(res);
      });
  }
}
