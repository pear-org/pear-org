import { Component, OnInit } from '@angular/core';
import Jobposting from '../../models/jobposting.model';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'public',
  templateUrl: './homepage.component.html',
  providers: [NgbCarouselConfig]
})
export class PublicComponent implements OnInit{
  showNavigationArrows = true;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
  }

  public newJobposting: Jobposting = new Jobposting()

  jobPostingList: Jobposting[];

  ngOnInit(): void {

  }
  title = 'PearAngular';
}
