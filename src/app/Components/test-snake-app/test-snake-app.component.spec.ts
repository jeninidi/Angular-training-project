import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSnakeAppComponent } from './test-snake-app.component';

describe('TestSnakeAppComponent', () => {
  let component: TestSnakeAppComponent;
  let fixture: ComponentFixture<TestSnakeAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSnakeAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSnakeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
