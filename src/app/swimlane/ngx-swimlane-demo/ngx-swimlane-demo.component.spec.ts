import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwimlaneDemoComponent } from './ngx-swimlane-demo.component';

describe('NgxSwimlaneDemoComponent', () => {
  let component: NgxSwimlaneDemoComponent;
  let fixture: ComponentFixture<NgxSwimlaneDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSwimlaneDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSwimlaneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
