import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImaskComponent } from './imask.component';

describe('ImaskComponent', () => {
  let component: ImaskComponent;
  let fixture: ComponentFixture<ImaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
