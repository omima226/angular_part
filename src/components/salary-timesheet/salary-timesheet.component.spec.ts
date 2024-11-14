import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTimesheetComponent } from './salary-timesheet.component';

describe('SalaryTimesheetComponent', () => {
  let component: SalaryTimesheetComponent;
  let fixture: ComponentFixture<SalaryTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryTimesheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
