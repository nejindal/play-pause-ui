import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenkins-details',
  templateUrl: './jenkins-details.component.html',
  styleUrls: ['./jenkins-details.component.css']
})
export class JenkinsDetailsComponent implements OnInit {
  private id: number;
  private name: string;
  private url: string;
  constructor() { }

  ngOnInit() {
  }

  setDetails(name: string, url: string){
    this.name = name;
    this.url = url;
  }

  getName(){
    return this.name;
  }

  getUrl(){
    return this.url;
  }

}
