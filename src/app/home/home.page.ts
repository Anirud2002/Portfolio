import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentSegment: string = "about";
  constructor() {}

  handleSegmentChange(e: CustomEvent) {
    const {value} = e.detail;
    this.currentSegment = value;
  }

}
