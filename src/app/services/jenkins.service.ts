import { Injectable } from '@angular/core';
import {JenkinsDetailsComponent} from './../jenkins-details/jenkins-details.component';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class JenkinsService {

  private jenkinsArray: JenkinsDetailsComponent[] = [];
  private jenkinsSubject = new Subject<JenkinsDetailsComponent>();
  jenkinsSubject$ = this.jenkinsSubject.asObservable();
  

  constructor(private http : HttpClient) { }

  
  getJenkinsDetails(){
    return this.jenkinsArray;
  }

  postJenkinsDetails(jenkinsDetails : JenkinsDetailsComponent){
    const body = {name: jenkinsDetails.getName(), url: jenkinsDetails.getUrl()};
    console.log(body);
    this.http.post('http://localhost:3000/jenkins',body).subscribe();
    this.jenkinsArray.push(jenkinsDetails);
    this.jenkinsSubject.next(jenkinsDetails);
  }

}
