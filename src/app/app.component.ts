import { Component } from '@angular/core';
import { routes } from './app-routing.module';
import { Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-swimlanes';
  _appRoutes:Routes = routes;
}
