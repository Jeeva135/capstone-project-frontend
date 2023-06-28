import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-usertasks',
  templateUrl: './usertasks.component.html',
  styleUrls: ['./usertasks.component.css']
})
export class UsertasksComponent implements OnInit{

  projectId: string = '';
  tasks: Tasks[] = [];

  constructor(private routes : ActivatedRoute,private route : Router,private taskService: TaskService){}

  ngOnInit(): void {
    this.routes.params.subscribe(params => {
      console.log("usertask");
      this.projectId = params["projectId"];
      this.loadTasks();
    });
  }

   logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/login']);
   }

   loadTasks(): void {
    
    this.taskService.getTasksByProjectId(this.projectId).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
