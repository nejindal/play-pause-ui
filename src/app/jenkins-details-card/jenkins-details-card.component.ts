import { Component, OnInit, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

import {JenkinsDetailsComponent} from './../jenkins-details/jenkins-details.component';

@Component({
  selector: 'app-jenkins-details-card',
  templateUrl: './jenkins-details-card.component.html',
  styleUrls: ['./jenkins-details-card.component.css'],
  animations: [trigger('flipState', [
    state('active', style({
      transform: 'rotateY(179.9deg)'
    })),
    state('inactive', style({
      transform: 'rotateY(0)'
    })),
    transition('active => inactive', animate('500ms ease-out')),
    transition('inactive => active', animate('500ms ease-in'))
  ])  
]
})
export class JenkinsDetailsCardComponent implements OnInit {

  @Input('jenkinsCard') private jenkinsDetail : JenkinsDetailsComponent;
  flip: string = 'inactive';
  constructor() { }

  ngOnInit() {
  }

  flipCard(){
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}
