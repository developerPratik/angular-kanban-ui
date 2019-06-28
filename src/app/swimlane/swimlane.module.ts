import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSwimlaneComponent } from './ngx-swimlane/ngx-swimlane.component';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { NgxSwimlaneDemoComponent } from './ngx-swimlane-demo/ngx-swimlane-demo.component';
import { NgbPopoverModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxSwimlaneComponent, NgxSwimlaneDemoComponent],
  imports: [
    CommonModule,
    NgxSmoothDnDModule,
    ScrollingModule,
    NgbPopoverModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NgModel
  ]
})
export class SwimlaneModule { }
