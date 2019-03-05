import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PostsColumnComponent} from './posts-column.component';

describe('PostsColumnComponent', () => {
  let component: PostsColumnComponent;
  let fixture: ComponentFixture<PostsColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsColumnComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
