import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawNameComponent } from './draw-name.component';

describe('DrawNameComponent', () => {
  let component: DrawNameComponent;
  let fixture: ComponentFixture<DrawNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrawNameComponent]
    });
    fixture = TestBed.createComponent(DrawNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
