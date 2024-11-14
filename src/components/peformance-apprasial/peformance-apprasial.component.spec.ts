import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeformanceApprasialComponent } from './peformance-apprasial.component';

describe('PeformanceApprasialComponent', () => {
  let component: PeformanceApprasialComponent;
  let fixture: ComponentFixture<PeformanceApprasialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeformanceApprasialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeformanceApprasialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
