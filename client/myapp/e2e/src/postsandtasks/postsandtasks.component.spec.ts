import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsandtasksComponent } from './postsandtasks.component';

describe('PostsandtasksComponent', () => {
  let component: PostsandtasksComponent;
  let fixture: ComponentFixture<PostsandtasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsandtasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsandtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
