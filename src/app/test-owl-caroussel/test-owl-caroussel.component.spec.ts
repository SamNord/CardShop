import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOwlCarousselComponent } from './test-owl-caroussel.component';

describe('TestOwlCarousselComponent', () => {
  let component: TestOwlCarousselComponent;
  let fixture: ComponentFixture<TestOwlCarousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOwlCarousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOwlCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
