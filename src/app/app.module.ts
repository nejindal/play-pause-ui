import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterJenkinsUrlComponent } from './register-jenkins-url/register-jenkins-url.component';
import { JenkinsDetailsComponent } from './jenkins-details/jenkins-details.component';
import { JenkinsDetailsCardComponent } from './jenkins-details-card/jenkins-details-card.component';

import {JenkinsService} from './services/jenkins.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterJenkinsUrlComponent,
    JenkinsDetailsComponent,
    JenkinsDetailsCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [JenkinsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
