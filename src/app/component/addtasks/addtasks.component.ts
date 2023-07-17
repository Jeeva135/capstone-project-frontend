import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-addtasks',
  templateUrl: './addtasks.component.html',
  styleUrls: ['./addtasks.component.css']
})
export class AddtasksComponent implements OnInit {
  projectId!: string ; // ID of the project for which the task is being added
  addTaskGroup!: FormGroup ;
  proId:string | undefined;

  userNameList: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    // Get the project ID from the route parameters
    // this.route.params.subscribe(params => {
    //   this.projectId = params['projectId'];
    //   this.proId=this.projectId;
    // });
    //console.log(this.projectId);

    this.fetchStrings();

    

    
  this.route.queryParams.subscribe(params => {
  this.projectId = params['projectId'];
  console.log("2"+this.projectId);
  });

    this.addTaskGroup = this.formBuilder.group({
      taskId: [''],
      taskName: [''],
      userId: [''],
      status: [''],
      taskDescription: ['']
    });
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

  onSubmit(): void {
    if (this.addTaskGroup.valid) {
      const task: Tasks = {
      
        taskId: this.addTaskGroup.get('taskId')?.value,
        taskName: this.addTaskGroup.get('taskName')?.value,
        userId: this.addTaskGroup.get('userId')?.value,
        status: this.addTaskGroup.get('status')?.value,
        projectId: this.projectId,
        taskDescription: this.addTaskGroup.get('taskDescription')?.value
      };

      console.log(task);
      console.log(this.userNameList);
      
      // console.log("projectis is:"+this.proId);
  
      this.taskService.saveTask(task).subscribe(() => {
        // Redirect to the project's task list page
        this.router.navigate(['/projecttasks', { projectId: this.projectId }]);
      },
      (error) => {
        console.log(error);
        // Handle the error
      });
    }}}