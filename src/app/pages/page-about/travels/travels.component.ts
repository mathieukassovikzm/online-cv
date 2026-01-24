import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

const modules = [CommonModule];

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss'],
  imports: [...modules],
  standalone: true
})
export class TravelsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
