import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private scoller:ViewportScroller){}

  scrollTo(){
    this.scoller.scrollToAnchor("footer")
  }
}
