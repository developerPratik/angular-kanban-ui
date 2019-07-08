import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-container',
  templateUrl: './group-container.component.html',
  styleUrls: ['./group-container.component.scss']
})
export class GroupContainerComponent implements OnInit {

  @Input('column') column: any;
  
  constructor() { }

  ngOnInit() {
  }

}
