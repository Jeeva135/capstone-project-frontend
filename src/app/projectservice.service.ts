import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Projects } from './model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  private apiUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.apiUrl);
  }
}
