import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeSubProjectsComponent } from './mange-sub-projects.component';

describe('MangeSubProjectsComponent', () => {
  let component: MangeSubProjectsComponent;
  let fixture: ComponentFixture<MangeSubProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangeSubProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MangeSubProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
