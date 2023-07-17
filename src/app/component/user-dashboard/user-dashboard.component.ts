import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from 'src/app/model/tasks';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  username: string;

  constructor(private route : Router,private rout : ActivatedRoute,private taskService: TaskService){}
   ngOnInit(): void {
      this.rout.queryParams.subscribe(params => {
      this.username = params['username'];
    });
   }
   logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/login']);
   }
   tasks() {
    this.route.navigate(['/usertasks'],{
          queryParams: { ['username']: this.username }
          }); 
  }

}