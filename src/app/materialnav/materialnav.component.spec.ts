import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialnavComponent } from './materialnav.component';

describe('MaterialnavComponent', () => {
  let component: MaterialnavComponent;
  let fixture: ComponentFixture<MaterialnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
