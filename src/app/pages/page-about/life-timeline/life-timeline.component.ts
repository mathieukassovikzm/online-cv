import { Component, OnInit } from '@angular/core';
import { IExperienceModel } from 'src/app/models/experience';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-life-timeline',
  templateUrl: './life-timeline.component.html',
  styleUrls: ['./life-timeline.component.scss'],
})
export class LifeTimelineComponent implements OnInit {
  public timelineEvents?: IExperienceModel[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.timelineEvents = this.aboutService.getLifeTimeline();
  }
}
