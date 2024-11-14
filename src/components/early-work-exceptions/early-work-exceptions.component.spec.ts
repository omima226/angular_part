import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyWorkExceptionsComponent } from './early-work-exceptions.component';

describe('EarlyWorkExceptionsComponent', () => {
  let component: EarlyWorkExceptionsComponent;
  let fixture: ComponentFixture<EarlyWorkExceptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarlyWorkExceptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarlyWorkExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
