import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwimlaneComponent } from './ngx-swimlane.component';

describe('NgxSwimlaneComponent', () => {
  let component: NgxSwimlaneComponent;
  let fixture: ComponentFixture<NgxSwimlaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSwimlaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSwimlaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
