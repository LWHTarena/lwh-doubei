import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePassworComponent } from './change-passwor.component';

describe('ChangePassworComponent', () => {
  let component: ChangePassworComponent;
  let fixture: ComponentFixture<ChangePassworComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePassworComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePassworComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
