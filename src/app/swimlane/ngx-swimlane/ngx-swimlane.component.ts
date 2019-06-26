import { Component, OnInit } from '@angular/core';
import { DataSourceService } from 'src/app/data-source.service';
import { DropResult } from 'smooth-dnd';
import { applyDrag } from 'src/utils/ngx.utils';
import { INgxDnd } from 'src/utils/app.interfaces';


@Component({
  selector: 'app-ngx-swimlane',
  templateUrl: './ngx-swimlane.component.html',
  styleUrls: ['./ngx-swimlane.component.scss']
})
export class NgxSwimlaneComponent implements OnInit {


  data: INgxDnd;
  constructor(
    public dataSource: DataSourceService
  ) { }

  ngOnInit() {
    this.data = this.dataSource.generator(5, 100);
  }

  onDrop(evt: DropResult) {
    console.log("dropped");
  }

  onColumnDrop(dropResult) {
    const tempData = Object.assign({}, this.data);
    tempData.mailGroups = applyDrag(tempData.mailGroups, dropResult);
    this.data = tempData;
  }

  onCardDrop(columnId: string, dropResult) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      const data = Object.assign({}, this.data);
      const column = data.mailGroups.find(p => p.id === columnId);
      const columnIndex = data.mailGroups.indexOf(column);


      const newColumn = Object.assign({}, column);
      newColumn.mails = applyDrag(newColumn.mails, dropResult);
      data.mailGroups.splice(columnIndex, 1, newColumn);

      this.data = data;
    }
  }

  getCardPayload(columnId: string) {
    return (index: number) => {
      return this.data.mailGroups.find(p => p.id === columnId).mails[index];
    }
  }

  log(...params) {
    // console.log(...params);
  }

 
}
