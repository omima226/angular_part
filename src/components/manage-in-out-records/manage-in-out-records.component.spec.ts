import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInOutRecordsComponent } from './manage-in-out-records.component';

describe('ManageInOutRecordsComponent', () => {
  let component: ManageInOutRecordsComponent;
  let fixture: ComponentFixture<ManageInOutRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageInOutRecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageInOutRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
