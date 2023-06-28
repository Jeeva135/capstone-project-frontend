import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttasksComponent } from './projecttasks.component';

describe('ProjecttasksComponent', () => {
  let component: ProjecttasksComponent;
  let fixture: ComponentFixture<ProjecttasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjecttasksComponent]
    });
    fixture = TestBed.createComponent(ProjecttasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
