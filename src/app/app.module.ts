import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSmoothDnDModule } from "ngx-smooth-dnd";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwimlaneModule } from './swimlane/swimlane.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SwimlaneModule,
    NgxSmoothDnDModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
