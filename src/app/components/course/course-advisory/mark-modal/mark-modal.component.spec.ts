import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkModalComponent } from './mark-modal.component';

describe('MarkModalComponent', () => {
  let component: MarkModalComponent;
  let fixture: ComponentFixture<MarkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
