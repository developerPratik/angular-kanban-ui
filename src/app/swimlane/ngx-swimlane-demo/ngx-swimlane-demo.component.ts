import { Component } from '@angular/core';
import { applyDrag, generateItems } from '../../../utils/ngx.utils';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod'];

const cardColors = ['azure', 'beige', 'bisque', 'blanchedalmond', 'burlywood', 'cornsilk', 'gainsboro', 'ghostwhite', 'ivory', 'khaki'];
const pickColor = () => {
  const rand = Math.floor((Math.random() * 10));
  return cardColors[rand];
};

export interface IGroupInterface {

  from: string,// group id
  to: string // group id
}

@Component({
  selector: 'app-cards',
  templateUrl: './ngx-swimlane-demo.component.html',
  styleUrls: ['./ngx-swimlane-demo.component.scss']
})
export class NgxSwimlaneDemoComponent {

  public selectGroupForm: FormGroup;


  private _groupOperations: Observable<IGroupInterface[]> = new BehaviorSubject([]);

  constructor(private _modalService: NgbModal) {

  }

  groups = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod'];
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
      children: generateItems(+(Math.random() * 50).toFixed() + 5, (j) => ({
        type: 'draggable',
        id: `${i}${j}`,
        props: {
          className: 'card',
          style: { backgroundColor: pickColor() }
        },
        data: lorem.slice(0, Math.floor(Math.random() * 150) + 30) + (j % 3 === 0 ? " pratik" : "")
      }))
    }))
  }

  filteredColumn: number;
  filter: boolean;
  filteredData: any[];

  items = generateItems(500, i => ({ data: 'Draggable ' + i }))

  onColumnDrop(dropResult) {
    const scene = Object.assign({}, this.scene);
    scene.children = applyDrag(scene.children, dropResult);
    this.scene = scene;
  }

  onCardDrop(columnId, dropResult) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const scene = Object.assign({}, this.scene);
      const column = scene.children.filter(p => p.id === columnId)[0];
      const columnIndex = scene.children.indexOf(column);

      const newColumn = Object.assign({}, column);
      newColumn.children = applyDrag(newColumn.children, dropResult);
      scene.children.splice(columnIndex, 1, newColumn);

      this.scene = scene;
    }
  }

  getCardPayload(columnId) {
    return (index) => {
      return this.scene.children.filter(p => p.id === columnId)[0].children[index];
    }
  }


  handleFilter(evt: any, index: number) {
    // the value to be filtered
    const filterValue: string = evt.target.value;
    if (filterValue === "") {
      this.filter = false;
      return;
    }

    this.filter = true;
    this.filteredColumn = index;

    let data = Object.assign({}, this.scene);
    const columns = data.children[index].children;

    // rows filtered based on data string
    this.filteredData = columns.filter(rowItem => {
      return (rowItem.data as string).includes(filterValue);
    });
  }

  log(...params) {
    // console.log(...params);
  }

  openModal(content: HTMLElement) {
    this._modalService.open(content).result.then(() => {

      console.log("done with modals");
    })

  }

  addGroup(group: string) {

    console.log("adding", group);

  }

  openGroupAddModel(groupModalContent: HTMLElement) {


    this._modalService.open(groupModalContent).result.then(() => {
      console.log("ok");
    }).catch(() => {
      console.log("closed model");
    })
  }


  openGroupSelectModal(selectGroupModalContent: HTMLElement) {

    this._modalService.open(selectGroupModalContent).result.then(() => { }).
      catch(() => {

      });

  }
}