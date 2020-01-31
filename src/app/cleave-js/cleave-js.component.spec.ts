import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaveJsComponent } from './cleave-js.component';

describe('CleaveJsComponent', () => {
  let component: CleaveJsComponent;
  let fixture: ComponentFixture<CleaveJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaveJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaveJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
