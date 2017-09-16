import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JenkinsDetailsCardComponent } from './jenkins-details-card.component';

describe('JenkinsDetailsCardComponent', () => {
  let component: JenkinsDetailsCardComponent;
  let fixture: ComponentFixture<JenkinsDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JenkinsDetailsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JenkinsDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
