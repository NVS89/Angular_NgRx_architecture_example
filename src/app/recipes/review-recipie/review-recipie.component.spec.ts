import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRecipieComponent } from './review-recipie.component';

describe('ReviewRecipieComponent', () => {
  let component: ReviewRecipieComponent;
  let fixture: ComponentFixture<ReviewRecipieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewRecipieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRecipieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
