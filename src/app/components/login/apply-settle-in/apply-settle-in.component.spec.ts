import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySettleInComponent } from './apply-settle-in.component';

describe('ApplySettleInComponent', () => {
  let component: ApplySettleInComponent;
  let fixture: ComponentFixture<ApplySettleInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplySettleInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplySettleInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
