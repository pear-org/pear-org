import { Component, OnInit } from '@angular/core';
import { ListingComponent } from './components/jobsearch/listing.component';
import Jobposting from './models/jobposting.model';
import * as $ from 'jquery';
import { fadeAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor(
    
  ) { }


  ngOnInit(): void {
  }

}
