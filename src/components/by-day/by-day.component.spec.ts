import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDayComponent } from './by-day.component';

describe('ByDayComponent', () => {
  let component: ByDayComponent;
  let fixture: ComponentFixture<ByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByDayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
