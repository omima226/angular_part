import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummryOfWorkingHrsComponent } from './summry-of-working-hrs.component';

describe('SummryOfWorkingHrsComponent', () => {
  let component: SummryOfWorkingHrsComponent;
  let fixture: ComponentFixture<SummryOfWorkingHrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummryOfWorkingHrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummryOfWorkingHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
