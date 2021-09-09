import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackQuizComponent } from './back-quiz.component';

describe('BackQuizComponent', () => {
  let component: BackQuizComponent;
  let fixture: ComponentFixture<BackQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
