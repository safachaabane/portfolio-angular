import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksQualificationsComponent } from './tasks-qualifications.component';

describe('TasksQualificationsComponent', () => {
  let component: TasksQualificationsComponent;
  let fixture: ComponentFixture<TasksQualificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksQualificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
