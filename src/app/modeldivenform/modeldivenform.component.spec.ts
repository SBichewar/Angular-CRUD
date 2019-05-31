import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldivenformComponent } from './modeldivenform.component';

describe('ModeldivenformComponent', () => {
  let component: ModeldivenformComponent;
  let fixture: ComponentFixture<ModeldivenformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldivenformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldivenformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
