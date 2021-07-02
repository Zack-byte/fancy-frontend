import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlighterTestComponent } from './highlighter-test.component';

describe('HighlighterTestComponent', () => {
  let component: HighlighterTestComponent;
  let fixture: ComponentFixture<HighlighterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlighterTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlighterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
