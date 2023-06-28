import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/model/projects';
import { ProjectserviceService } from 'src/app/projectservice.service';

@Component({
  selector: 'app-userprojects',
  templateUrl: './userprojects.component.html',
  styleUrls: ['./userprojects.component.css']
})
export class UserprojectsComponent {
  projects: Projects[] = [];
  constructor(private route : Router,private projectService: ProjectserviceService){}
   ngOnInit(): void {
    this.getProjects();
       
   }
   logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/login']);
   }

  
  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
