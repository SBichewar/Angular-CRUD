import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlydemoComponent } from './formlydemo.component';

describe('FormlydemoComponent', () => {
  let component: FormlydemoComponent;
  let fixture: ComponentFixture<FormlydemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlydemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
