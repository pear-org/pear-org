import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './app.component.header.html'
})
export class AppComponentHeader implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url === '/') {
      console.log('active');
      $('.nav-menu .menu-active').removeClass('menu-active');
    }

  }
  title = 'PearAngular';
}
