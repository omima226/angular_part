import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencePercentageComponent } from './absence-percentage.component';

describe('AbsencePercentageComponent', () => {
  let component: AbsencePercentageComponent;
  let fixture: ComponentFixture<AbsencePercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsencePercentageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsencePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
