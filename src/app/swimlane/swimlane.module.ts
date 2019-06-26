import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSwimlaneComponent } from './ngx-swimlane/ngx-swimlane.component';
import { NgxSmoothDnDModule } from 'ngx-smooth-dnd';

@NgModule({
  declarations: [NgxSwimlaneComponent],
  imports: [
    CommonModule,
    NgxSmoothDnDModule
  ]
})
export class SwimlaneModule { }
