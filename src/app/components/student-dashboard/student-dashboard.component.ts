import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  currentOrientation = 'horizontal';
  constructor() { }

  ngOnInit() {
  }

}
