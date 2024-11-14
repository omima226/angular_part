import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualVacataionComponent } from './individual-vacataion.component';

describe('IndividualVacataionComponent', () => {
  let component: IndividualVacataionComponent;
  let fixture: ComponentFixture<IndividualVacataionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualVacataionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualVacataionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
