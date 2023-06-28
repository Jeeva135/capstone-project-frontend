import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavuserComponent } from './navuser.component';

describe('NavuserComponent', () => {
  let component: NavuserComponent;
  let fixture: ComponentFixture<NavuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavuserComponent]
    });
    fixture = TestBed.createComponent(NavuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
