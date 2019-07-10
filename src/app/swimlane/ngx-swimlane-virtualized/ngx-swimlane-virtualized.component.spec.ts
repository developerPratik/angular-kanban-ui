import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwimlaneVirtualizedComponent } from './ngx-swimlane-virtualized.component';

describe('NgxSwimlaneVirtualizedComponent', () => {
  let component: NgxSwimlaneVirtualizedComponent;
  let fixture: ComponentFixture<NgxSwimlaneVirtualizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSwimlaneVirtualizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSwimlaneVirtualizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
