import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
    selector: 'app-view-items',
    templateUrl: './view-items.component.html',
    styleUrls: ['./view-items.component.scss'],
    standalone: true,
    imports: [JsonPipe]
})
export class ViewItemsComponent implements OnChanges {
 
  @Input() globalObject:any="";

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }


}
