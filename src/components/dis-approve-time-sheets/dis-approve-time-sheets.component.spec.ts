import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisApproveTimeSheetsComponent } from './dis-approve-time-sheets.component';

describe('DisApproveTimeSheetsComponent', () => {
  let component: DisApproveTimeSheetsComponent;
  let fixture: ComponentFixture<DisApproveTimeSheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisApproveTimeSheetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisApproveTimeSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
