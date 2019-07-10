import { Component, HostListener } from '@angular/core';
import { DropResult } from 'ngx-smooth-dnd';
import { applyDrag, generateItems, apply } from '../../../utils/ngx.utils';
import { ScrollEvent } from 'ngx-scroll-event';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod', 'Completed'];

const cardColors = ['azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood', 'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'];
const pickColor = () => {
  const rand = Math.floor((Math.random() * 10));
  return cardColors[rand];
};

@Component({
  selector: 'app-cards',
  templateUrl: './ng-multi-select.component.html',
  styleUrls: ['./ng-multi-select.component.scss']
})
export class NgMultiSelectComponent {
  public viewPortItems: any
  scene = {
    type: 'container',
    props: {
      orientation: 'horizontal'
    },
    children: generateItems(4, (i: number) => ({
      id: `column${i}`,
      type: 'container',
      name: columnNames[i],
      props: {
        orientation: 'vertical',
        className: 'card-container'
      },
      children: generateItems(+(Math.random() * 5).toFixed(), (j) => ({
        type: 'draggable',
        id: `${i}${j}`,
        props: {
          className: 'card',
          style: { backgroundColor: pickColor() }
        },
        data: `Item number ${j}`
      }))
    }))
  };

  @HostListener('document:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    switch ($event.code) {
      case "Escape":
        this.multiSelectItemsArray = [];
        return;
    }
  }

  items = generateItems(50, (i: string) => ({ data: 'Draggable ' + i }));
  multiSelectItemsArray: any[] = [];

  onColumnDrop(dropResult: DropResult) {
    const scene = Object.assign({}, this.scene);
    const { children } = apply(scene.children, dropResult);
    scene.children = children;
    this.scene = scene;
  }



  onCardDrop(columnId: string, dropResult: DropResult) {
    /**
     * need to check if there are items in the multiselect array or not
     * if not, no changes to the logic.
     * if there are elements in the array, execute the logic in a for loop
     */

    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {

      const scene = Object.assign({}, this.scene);
      const column = scene.children.find(p => p.id === columnId);
      const columnIndex = scene.children.indexOf(column);

      if (this.multiSelectItemsArray.length > 0) {
        const newColumn = Object.assign({}, column);
        dropResult.payload = this.multiSelectItemsArray;
        const { children, operation } = apply(newColumn.children, dropResult);
        newColumn.children = children;
        scene.children.splice(columnIndex, 1, newColumn);
        this.scene = scene;

        if (operation === 'add') {
          console.log('cleared the array')
          this.multiSelectItemsArray = [];
        }
      }
      else {
        const newColumn = Object.assign({}, column);
        const { children, operation } = apply(newColumn.children, dropResult);
        newColumn.children = children;
        scene.children.splice(columnIndex, 1, newColumn);
        this.scene = scene;
        this.multiSelectItemsArray = [];
      }

      // set the multi selection array to initial empty array

    }
  }

  getCardPayload(columnId: string) {
    return (index: number) => {
      return this.scene.children.filter(p => p.id === columnId)[0].children[index];
    }
  }

  cardMultiSelect({ card, operation }) {
    /**
     * Added the multi selected card to the multiSelectArray variable
     */
    if (operation === 'add') {
      const tempArray = [...this.multiSelectItemsArray];
      tempArray.push(card);
      this.multiSelectItemsArray = tempArray;
    }
    else {
      const tempArray = [...this.multiSelectItemsArray];
      this.multiSelectItemsArray = tempArray.filter(item => item.id !== card.id);
    }
  }

  onDragStart(...params: any[]) {
    // console.log(params);
  }

  onDragStop(...params: any[]) {
    // console.log(params);/
  }

  onDragEnter(...params: any[]) {
    // console.log(params);
  }

  onDragLeave(dragLeave: any) {
    // console.log(dragLeave);
  }

  log(...params) {
    // console.log();Idd
  }

  handleScroll($event: ScrollEvent, columnIndex: number) {

    return;
    const scrolledColumnChildren = this.scene.children[columnIndex].children;

    const columnSize = scrolledColumnChildren.length;
    if ($event.isReachingBottom) {
      const generatedItems = generateItems(+(Math.random() * 10).toFixed() + 5, (j) => ({
        type: 'draggable',
        id: `${columnIndex}${columnSize + j}`,
        props: {
          className: 'card',
          style: { backgroundColor: pickColor() }
        },
        data: `Item number ${columnSize + j}`
      }));

      const items = [...scrolledColumnChildren, ...generatedItems];

      this.scene.children[columnIndex].children = items;
    }

  }
}