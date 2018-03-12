import { AfterViewInit, ChangeDetectorRef, Component, EmbeddedViewRef, OnInit, ViewChild, ViewContainerRef, } from '@angular/core';
import { Router } from '@angular/router';
import { LeftNavService } from '../../services/left-nav.service';

@Component({
  selector: 'app-sidebar',
  template: `
    <div class="sidebar">
      <ng-container #vcr></ng-container>
    </div>
  `,
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, AfterViewInit {

  _current: EmbeddedViewRef<any> | null = null;

  @ViewChild('vcr', { read: ViewContainerRef })
  vcr: ViewContainerRef;

  constructor(private leftNavService: LeftNavService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.leftNavService
      .contents
      .subscribe(ref => {
        if (this._current !== null) {
          this._current.destroy();
          this._current = null;
        }
        if (ref === null) {
          return;
        }
        this._current = this.vcr.createEmbeddedView(ref);
        this.cdRef.detectChanges();
      });
  }


}
