import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input() title1: string;
  @Input() title2: string;
  constructor() {}

  ngOnInit(): void {}
}
