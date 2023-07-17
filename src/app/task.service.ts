import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Tasks } from './model/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUri = 'http://localhost:8300/api/v1/task';
  private apiUrl = 'http://localhost:8080/auth/getusers';

  constructor(private http: HttpClient) { }
 
  saveTask(task: Tasks): Observable<Tasks> {
    return this.http.post<Tasks>(`${this.apiUri}/admincreate`,task);
  }

  getTasks(){}

  updateTask(taskId:string,selectedTask:Tasks): Observable<any>{
    return this.http.put(`${this.apiUri}/adminupdate/${taskId}`,selectedTask);

  }

  getTasksByProjectId(projectId: string): Observable<Tasks[]> {
    const url = `${this.apiUri}/gettaskbyprojectid/${projectId}`;
    return this.http.get<Tasks[]>(url);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUri}/admindelete/${id}`);
  }

  viewComment(taskId:string): Observable<any>{
    return this.http.get<string>(`http://localhost:8200/api/v1/comment/viewcomment/{taskId}`);
  }

  fetchUserNameFromBackend(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }

  getTasksByUserId(userId: string): Observable<Tasks[]> {
    const url = `${this.apiUri}/getbyuserid/${userId}`;
    return this.http.get<Tasks[]>(url);
  }

  updateStatus(taskId:string,status:string): Observable<any>{
    const url = `${this.apiUri}/userupdatestatus/${taskId}`;
    return this.http.put(url,status);
  }
}
