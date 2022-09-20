import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestALlDummyProjectComponent } from './test-all-dummy-project.component';

describe('TestALlDummyProjectComponent', () => {
  let component: TestALlDummyProjectComponent;
  let fixture: ComponentFixture<TestALlDummyProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestALlDummyProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestALlDummyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
