import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Speech1Component } from './speech1.component';

describe('Speech1Component', () => {
  let component: Speech1Component;
  let fixture: ComponentFixture<Speech1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Speech1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Speech1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
