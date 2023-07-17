import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/task.service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-projecttasks',
  templateUrl: './projecttasks.component.html',
  styleUrls: ['./projecttasks.component.css']
})


export class ProjecttasksComponent implements OnInit {
  taskId: string = '';
    taskName: string = '';
    userId: string = '';
    status:string ='';
    projectId:string ='';
    taskDescription:string ='';
    
  tasks: Tasks[] = [];
  selectedTask: Tasks = new Tasks();

  userNameList: string[] = [];

 
  visible: boolean = false;
  disp:string;
  
  private apiUrl = 'http://localhost:8300/api/v1/task';

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchStrings();
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('projectId')!;
      console.log(this.projectId);
      this.getTasksByProjectId(this.projectId);
    });
    
  }
  // show(taskid:string){
  //   this.visible=true;
  //   this.disp=taskid;

  // }



  
  getTasksByProjectId(projectId: string): Observable<Tasks[]> {
    const url = `${this.apiUrl}/gettaskbyprojectid/${projectId}`;
    this.taskService.getTasksByProjectId(this.projectId).subscribe(tasks => {
      this.tasks = tasks;
    });console.log(this.tasks);
    return this.http.get<Tasks[]>(url);
  }
// getTasksByProjectId(projectId: string): Observable<Tasks[]> {
//   const url = `${this.apiUrl}/tasks/${projectId}`;
//   return this.http.get<Tasks[]>(url)
//     .pipe(
//       catchError(this.handleError)
//     );
// }

// updateTask(task: Tasks): Observable<Tasks> {
//   const url = `${this.apiUrl}/userupdatetask/${task.taskId}`;
//   return this.http.put<Tasks>(url, task)
//     .pipe(
//       catchError(this.handleError)
//     );
// }
// updateTas(task: Tasks): Observable<Tasks> {
//   this.selectedTask = task;
//   console.log(this.selectedTask);
//   console.log(task);
//   const url = `${this.apiUrl}/adminupdate/${this.taskId}`;
//   this.location.back();
//   return this.http.put<Tasks>(url, task)
//     .pipe(
//       catchError(this.handleError)
//     );
     
// }

selectedTaskId: string; // Define a variable to store the selected Task ID
selectedTaskName: string;
selectedTaskDescription: string;
selectedUserId:string;
selectedProjectId:string;
selectedStatus: string;

openEditTaskModal(taskId: string,taskName:string,taskDescription:string,userId:string,projectId:string,status:string): void {
  this.selectedTaskId = taskId; // Store the selected Task ID
  this.selectedTaskName = taskName;
  this.selectedTaskDescription = taskDescription;
  this.selectedUserId=userId;
  this.selectedProjectId=projectId;
  this.selectedStatus=status
}
updateTask(){
  this.selectedTask.taskId=this.selectedTaskId;
  this.selectedTask.taskDescription=this.selectedTaskDescription;
  this.selectedTask.taskName=this.selectedTaskName;
  this.selectedTask.userId=this.selectedUserId;
  this.selectedTask.projectId=this.selectedProjectId;
  this.selectedTask.status=this.selectedStatus;
  this.taskService.updateTask(this.selectedTaskId,this.selectedTask)
  .subscribe(
    response => {
      console.log("Task updated successfully", response);
      this.router.navigate(['/projecttasks/', this.projectId]).then(() => {
        window.location.reload();
      });
    },
    error =>{
      console.error("Failed to update",error);
    }
  );
}


fetchStrings() {
  this.taskService.fetchUserNameFromBackend().subscribe(
    (response: string[]) => {
      this.userNameList = response;
      console.log(response);
    },
    (error) => {
      console.error('Error fetching string list:', error);
    }
    );
}


editTask(task: Tasks) {
  this.selectedTask = task; 
}

// deleteTask(taskId: string): Observable<void> {
//   const url = `${this.apiUrl}/admindelete/${taskId}`;
//   console.log(taskId);
//   return this.http.delete<void>(url)
//     .pipe(
//       catchError(this.handleError)
//     );
// }

deleteTask(task: Tasks): void {
  this.taskService.deleteTask(task.taskId).subscribe(
    () => {
      const index = this.tasks.findIndex(t => t.taskId === task.taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
      console.log(`Deleted task with ID: ${task.taskId}`);
    },
    (error) => {
      console.log(error);
      // Handle the error
    }
  );
}

private handleError(error: any): Observable<never> {
  console.error('An error occurred:', error);
  // Handle error here, e.g., show an error message or perform any necessary actions
  // You can also throw a custom error or rethrow the original error if needed
  return throwError('Something went wrong. Please try again later.');
}

}
 

