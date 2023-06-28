import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprojectsComponent } from './userprojects.component';

describe('UserprojectsComponent', () => {
  let component: UserprojectsComponent;
  let fixture: ComponentFixture<UserprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprojectsComponent]
    });
    fixture = TestBed.createComponent(UserprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
