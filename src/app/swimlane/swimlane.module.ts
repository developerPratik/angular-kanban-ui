import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSwimlaneComponent } from './ngx-swimlane/ngx-swimlane.component';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NgxSwimlaneDemoComponent } from './ngx-swimlane-demo/ngx-swimlane-demo.component';
import { NgbPopoverModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { NgMultiSelectComponent } from './ng-multi-select/ng-multi-select.component';
import { GroupContainerComponent } from './group-container/group-container.component';
import { ScrollEventModule } from "ngx-scroll-event";
import { VirtualScrollerModule } from "ngx-virtual-scroller";
import { NgxSwimlaneVirtualizedComponent } from './ngx-swimlane-virtualized/ngx-swimlane-virtualized.component';

@NgModule({

  declarations: [NgxSwimlaneComponent, NgxSwimlaneDemoComponent, CardComponent, NgMultiSelectComponent, GroupContainerComponent, NgxSwimlaneVirtualizedComponent],
  imports: [
    CommonModule,
    NgxSmoothDnDModule,
    ScrollingModule,
    NgbPopoverModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollEventModule,
    ScrollingModule,
    VirtualScrollerModule
  ],
  providers: [
    NgModel
  ]
})
export class SwimlaneModule { }
