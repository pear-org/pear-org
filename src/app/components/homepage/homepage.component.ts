import { Component, OnInit } from '@angular/core';
import Jobposting from '../../models/jobposting.model';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from '../../animations';
import {
  trigger,
  animate,
  style,
  state,
  transition,
} from '@angular/animations'

@Component({
  selector: 'public',
  templateUrl: './homepage.component.html',
  providers: [NgbCarouselConfig],
  animations: [trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1000)),
  ])]
})
export class PublicComponent implements OnInit{
  showNavigationArrows = true;
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  public newJobposting: Jobposting = new Jobposting()

  jobPostingList: Jobposting[];

  ngOnInit(): void {}
  title = 'PearAngular';
}
