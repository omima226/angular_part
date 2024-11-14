import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMeansurementComponent } from './project-meansurement.component';

describe('ProjectMeansurementComponent', () => {
  let component: ProjectMeansurementComponent;
  let fixture: ComponentFixture<ProjectMeansurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMeansurementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectMeansurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
