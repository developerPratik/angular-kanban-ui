import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSwimlaneComponent } from './swimlane/ngx-swimlane/ngx-swimlane.component';

export const routes: Routes = [
  {

    path: '',
    redirectTo: '/ngx-smooth-dnd',
    pathMatch: 'full'
  },
  {
    path: 'ngx-smooth-dnd',
    component: NgxSwimlaneComponent,
    pathMatch: 'full',
  },
  {
    path: 'webix',
    component: NgxSwimlaneComponent,
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

