import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertasksComponent } from './usertasks.component';

describe('UsertasksComponent', () => {
  let component: UsertasksComponent;
  let fixture: ComponentFixture<UsertasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsertasksComponent]
    });
    fixture = TestBed.createComponent(UsertasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
