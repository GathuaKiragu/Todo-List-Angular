import {Component} from '@angular/core';
import {Task} from './task.model';

@Component{
    selector:'my-tasks'
    template:`
     <div *ngFor="let currentTask of tasks>
<h3>{{ currentTask.description }}{{currentTask.Time}}</h3>
<button (Click)"ShowDetails(currentTask)">Edit</button>
    </div>
    `
}

export TaskComponentList{
public class task: Task []=[
    new task ("Complete Task A", "11:30 Pm", 0);
    new task ("Complete Task B", "12:30 Pm", 1);
    new task ("Complete Task C", "01:30 Pm", 2);
    new task ("Complete Task D", "03:30 Pm", 3);
    new task ("Complete Task E", "05:30 Pm", 4);

];
    
}