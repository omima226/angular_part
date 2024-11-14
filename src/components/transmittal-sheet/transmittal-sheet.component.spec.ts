import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmittalSheetComponent } from './transmittal-sheet.component';

describe('TransmittalSheetComponent', () => {
  let component: TransmittalSheetComponent;
  let fixture: ComponentFixture<TransmittalSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmittalSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmittalSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
