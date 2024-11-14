import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsReqComponent } from './vacations-req.component';

describe('VacationsReqComponent', () => {
  let component: VacationsReqComponent;
  let fixture: ComponentFixture<VacationsReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationsReqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationsReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
