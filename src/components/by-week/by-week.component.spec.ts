import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByWeekComponent } from './by-week.component';

describe('ByWeekComponent', () => {
  let component: ByWeekComponent;
  let fixture: ComponentFixture<ByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByWeekComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
