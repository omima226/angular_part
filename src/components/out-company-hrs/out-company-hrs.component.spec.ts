import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutCompanyHrsComponent } from './out-company-hrs.component';

describe('OutCompanyHrsComponent', () => {
  let component: OutCompanyHrsComponent;
  let fixture: ComponentFixture<OutCompanyHrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutCompanyHrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutCompanyHrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
