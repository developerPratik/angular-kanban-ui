import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxSwimlaneComponent } from './swimlane/ngx-swimlane/ngx-swimlane.component';
import { NgxSwimlaneDemoComponent } from './swimlane/ngx-swimlane-demo/ngx-swimlane-demo.component';
import { NgMultiSelectComponent } from './swimlane/ng-multi-select/ng-multi-select.component';

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
  },
  {
    path: 'ngx-multi-select',
    component: NgMultiSelectComponent,
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

