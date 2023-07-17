import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/model/projects';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminserviceService } from 'src/app/adminservice.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {
  projectId: string= '';
  projectName: string= '';
  projectDescription: string= '';

  selectedProject: Projects =new Projects();
  projects: Projects[] = [];

  selectedProjectId: string;
  selectedProjectName: string;
  selectedProjectDescription: string;
  
  constructor(private adminService: AdminserviceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.adminService.getProjects().subscribe(
      (data: Projects[]) => {
        this.projects = data;
      },
      (error) => {
        console.log(error);
        // Handle the error
      }
    );
  }

  deleteProject(project: Projects): void {
    this.adminService.deleteProject(project.projectId).subscribe(
      () => {
        const index = this.projects.findIndex(p => p.projectId === project.projectId);
        if (index !== -1) {
          this.projects.splice(index, 1);
        }
        console.log(`Deleted project with ID: ${project.projectId}`);
      },
      (error) => {
        console.log(error);
        // Handle the error
      }
    );
  }

  openEditProjectModal(projectId: string,projectName: string,projectDescription: string): void {
    this.selectedProjectId = projectId; // Store the selected Project ID
    this.selectedProjectName = projectName;
    this.selectedProjectDescription = projectDescription;
  }

  updateProject(){
    this.selectedProject.projectId=this.selectedProjectId;
    this.selectedProject.projectDescription=this.selectedProjectDescription;
    this.selectedProject.projectName=this.selectedProjectName;
    this.adminService.updateProject(this.selectedProjectId,this.selectedProject)
    .subscribe(
      response => {
        console.log("Project updated successfully", response);
        this.router.navigate(['/viewproject/']).then(() => {
          window.location.reload();
        });
      },
      error =>{
        console.error("Failed to update",error);
      }
    );
  }

  // updateProject(project: Projects): void {
  //   // Implement your update logic here
  //   // For example, navigate to the update page with the project ID
  //   this.router.navigate(['/update-project', project.projectId]);
  // }
  viewTasks(projectId: string): void {
    this.router.navigate(['/projecttasks', projectId]);
  }
  
}