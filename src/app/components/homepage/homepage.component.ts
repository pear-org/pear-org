import { Component, OnInit } from '@angular/core';
import Jobposting from '../../models/jobposting.model';
import * as $ from 'jquery';
import ScrollSnap from 'scroll-snap';

@Component({
  selector: 'public',
  templateUrl: './homepage.component.html'
})
export class PublicComponent implements OnInit{
  constructor() { }

  public newJobposting: Jobposting = new Jobposting()

  jobPostingList: Jobposting[];

  ngOnInit(): void {
    const snapConfig = {
      scrollSnapDestination: '90% 0%', // *REQUIRED* scroll-snap-destination css property, as defined here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination
      scrollTimeout: 100, // *OPTIONAL* (default = 100) time in ms after which scrolling is considered finished
      scrollTime: 300, // *OPTIONAL* (default = 300) time in ms for the smooth snap
    }
    
    function callback() {
      alert('called when snap animation ends');
    }
    
    const element = document.getElementById('testsnap');
    const snapObject = new ScrollSnap(element, snapConfig);
    
    snapObject.bind(callback);
  }
  title = 'PearAngular';
}
