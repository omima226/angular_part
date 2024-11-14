import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLogisticsComponent } from './project-logistics.component';

describe('ProjectLogisticsComponent', () => {
  let component: ProjectLogisticsComponent;
  let fixture: ComponentFixture<ProjectLogisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectLogisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
