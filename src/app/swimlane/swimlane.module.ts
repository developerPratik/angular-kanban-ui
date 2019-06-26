import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSwimlaneComponent } from './ngx-swimlane/ngx-swimlane.component';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { ScrollingModule, CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { NgxSwimlaneDemoComponent } from './ngx-swimlane-demo/ngx-swimlane-demo.component';

@NgModule({
  declarations: [NgxSwimlaneComponent, NgxSwimlaneDemoComponent],
  imports: [
    CommonModule,
    NgxSmoothDnDModule
  ]
})
export class SwimlaneModule { }
