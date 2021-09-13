import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadQuizComponent } from './head-quiz.component';

describe('HeadQuizComponent', () => {
  let component: HeadQuizComponent;
  let fixture: ComponentFixture<HeadQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
