import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OftenQuestionsComponent } from './often-questions.component';

describe('OftenQuestionsComponent', () => {
  let component: OftenQuestionsComponent;
  let fixture: ComponentFixture<OftenQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OftenQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OftenQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
