import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalcEpoxyComponent} from './calc-epoxy.component';

describe('CalcEpoxyComponent', () => {
  let component: CalcEpoxyComponent;
  let fixture: ComponentFixture<CalcEpoxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalcEpoxyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcEpoxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
