import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-overview',
  template: `
    <app-sidebar></app-sidebar>
    <app-topbar></app-topbar>
    <router-outlet></router-outlet>
  `,
})
export class OverviewComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
