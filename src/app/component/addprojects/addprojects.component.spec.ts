import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectsComponent } from './addprojects.component';

describe('AddprojectsComponent', () => {
  let component: AddprojectsComponent;
  let fixture: ComponentFixture<AddprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprojectsComponent]
    });
    fixture = TestBed.createComponent(AddprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
