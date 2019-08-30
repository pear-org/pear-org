import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  style,
  state,
  transition,
} from '@angular/animations'

@Component({
  selector: 'student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
  animations: [trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])]
})
export class StudentDashboardComponent implements OnInit {
  currentOrientation = 'horizontal';
  constructor() { }

  ngOnInit() {
  }

}
