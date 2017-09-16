import { Component, OnInit } from '@angular/core';
import {JenkinsService} from './../services/jenkins.service';
import {JenkinsDetailsComponent} from './../jenkins-details/jenkins-details.component';

@Component({
  selector: 'app-register-jenkins-url',
  templateUrl: './register-jenkins-url.component.html',
  styleUrls: ['./register-jenkins-url.component.css'],
  providers: []
})
export class RegisterJenkinsUrlComponent implements OnInit {

  private jenkins_name: string;
  private jenkins_url: string;
  

  constructor(private jenkinsService : JenkinsService) { }

  ngOnInit() {
  }

  newJenkinsServer(){
    let jenkinsDetails = new JenkinsDetailsComponent();
    jenkinsDetails.setDetails(this.jenkins_name, this.jenkins_url);
    this.jenkinsService.postJenkinsDetails(jenkinsDetails);

    //TODO Add new jenkins details to DB
  }

}
