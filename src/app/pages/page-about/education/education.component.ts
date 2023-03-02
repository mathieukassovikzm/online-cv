import { Component, OnInit } from '@angular/core';
import { IEducationModel } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public educations: IEducationModel[] = [];
  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.educations = this.aboutService.getAbout().educations;
  }
}
