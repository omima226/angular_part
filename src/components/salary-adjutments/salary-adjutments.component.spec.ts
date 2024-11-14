import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryAdjutmentsComponent } from './salary-adjutments.component';

describe('SalaryAdjutmentsComponent', () => {
  let component: SalaryAdjutmentsComponent;
  let fixture: ComponentFixture<SalaryAdjutmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryAdjutmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryAdjutmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
