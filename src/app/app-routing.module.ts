import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSwimlaneComponent } from './swimlane/ngx-swimlane/ngx-swimlane.component';
import { NgxSwimlaneDemoComponent } from './swimlane/ngx-swimlane-demo/ngx-swimlane-demo.component';

export const routes: Routes = [
  {

    path: '',
    redirectTo: '/ngx-demo',
    pathMatch: 'full'
  },
  {
    path: 'ngx-smooth-dnd',
    component: NgxSwimlaneComponent,
    pathMatch: 'full',
  },
  {
    path: 'ngx-demo',
    component: NgxSwimlaneDemoComponent,
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

