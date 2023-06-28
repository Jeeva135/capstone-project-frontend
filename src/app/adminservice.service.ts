import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Projects } from './model/projects';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  private apiUrl = 'http://localhost:8100/api/v1/projects';

  constructor(private http: HttpClient) { }

  saveProject(project: Projects): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, project);
  }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${this.apiUrl}/getall`);
  }
  
  deleteProject(id: string):Observable<Projects>{
    return this.http.delete<Projects>(`http://localhost:8100/api/v1/projects/delete/${id}`);
  }

  getProjectById(id: number): Observable<Projects> {
    return this.http.get<Projects>(`http://localhost:8100/api/v1/projects/get/projectId=${Projects}`);
  }

  updateProject(id:string,project: Projects): Observable<Object> {
    return this.http.put(`http://localhost:8100/api/v1/projects/update/${id}`,project);
  }

  deleteTask(id: string): Observable<any> {
  //  return this.http.delete(`${this.apiUrl}/tasks/${id}`);
      return this.http.delete(`http://localhost:8300/api/v1/task/admindelete/${id}`);
  }

  
}
