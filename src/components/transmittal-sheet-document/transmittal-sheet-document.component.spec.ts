import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmittalSheetDocumentComponent } from './transmittal-sheet-document.component';

describe('TransmittalSheetDocumentComponent', () => {
  let component: TransmittalSheetDocumentComponent;
  let fixture: ComponentFixture<TransmittalSheetDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransmittalSheetDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransmittalSheetDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
