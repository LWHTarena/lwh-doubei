import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAdvisoryComponent } from './course-advisory.component';

describe('CourseAdvisoryComponent', () => {
  let component: CourseAdvisoryComponent;
  let fixture: ComponentFixture<CourseAdvisoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAdvisoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAdvisoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
