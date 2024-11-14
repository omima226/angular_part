import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncFingerPrintComponent } from './sync-finger-print.component';

describe('SyncFingerPrintComponent', () => {
  let component: SyncFingerPrintComponent;
  let fixture: ComponentFixture<SyncFingerPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncFingerPrintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncFingerPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
