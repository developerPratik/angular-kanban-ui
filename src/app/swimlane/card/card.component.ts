import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('card') card: any;


  @Input('active') active: boolean;
  @Output() cardClickEvent: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('click', ['$event'])
  onCardClick($event: MouseEvent) {
    if ($event.ctrlKey) {
      this.cardClickEvent.emit({
        card: this.card,
        operation: 'add'
      });
    }
    else{
      this.cardClickEvent.emit({
        card: this.card,
        operation: 'remove'
      });
    }

  }

  // @Output('')?
  constructor() { }

  ngOnInit() {
    console.log("initialized component");
  }



}
