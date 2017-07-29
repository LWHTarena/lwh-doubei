import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgInfoEditComponent } from './org-info-edit.component';

describe('OrgInfoEditComponent', () => {
  let component: OrgInfoEditComponent;
  let fixture: ComponentFixture<OrgInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
