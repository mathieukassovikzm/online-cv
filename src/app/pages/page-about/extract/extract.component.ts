import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  public extract = '';
  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.extract = this.aboutService.getAbout().extract;
  }
}
