import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {
  imagePath = './assets/images/myPhoto.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
