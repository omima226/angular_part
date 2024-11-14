import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHoursRolesComponent } from './work-hours-roles.component';

describe('WorkHoursRolesComponent', () => {
  let component: WorkHoursRolesComponent;
  let fixture: ComponentFixture<WorkHoursRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkHoursRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkHoursRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
