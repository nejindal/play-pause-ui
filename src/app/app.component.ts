import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import {JenkinsDetailsComponent} from './jenkins-details/jenkins-details.component';

import {PipelineService} from './services/pipeline.service';
import {JenkinsService} from './services/jenkins.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PipelineService]
})
export class AppComponent implements OnDestroy{
  title = 'app';
  subscription : Subscription;
  jenkinsArray: JenkinsDetailsComponent[] = [];
  
  constructor(private pipelineService: PipelineService, private jenkinsService: JenkinsService){
  }
  ngOnInit(){
    const url = '/api/json?tree=jobs[name,url]&pretty=true';
    console.log(this.pipelineService.getPipelines(url,""));
    this.subscription = this.jenkinsService.jenkinsSubject$.subscribe( data => {this.jenkinsArray.push(data); console.log(this.jenkinsArray)}, err => console.log(err));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
