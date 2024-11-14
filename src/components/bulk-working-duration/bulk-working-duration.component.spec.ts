import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkWorkingDurationComponent } from './bulk-working-duration.component';

describe('BulkWorkingDurationComponent', () => {
  let component: BulkWorkingDurationComponent;
  let fixture: ComponentFixture<BulkWorkingDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulkWorkingDurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkWorkingDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
