import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TestfieldComponent} from './testfield.component';

describe('TestfieldComponent', () => {
  let component: TestfieldComponent;
  let fixture: ComponentFixture<TestfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestfieldComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
