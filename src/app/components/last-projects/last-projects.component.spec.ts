import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastProjectsComponent } from './last-projects.component';

describe('LastProjectsComponent', () => {
  let component: LastProjectsComponent;
  let fixture: ComponentFixture<LastProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
