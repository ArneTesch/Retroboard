import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EmbeddedViewRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TopbarService } from '../../services/topbar.service';

@Component({
  selector: 'app-topbar',
  template: `
    <div class="full-container topbar">
      <ng-container #vcr></ng-container>
      <h1>RetroBoard</h1>
    </div>
  `,
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit, AfterViewInit {
  _current: EmbeddedViewRef<any> | null = null;

  @ViewChild('vcr', { read: ViewContainerRef })
  vcr: ViewContainerRef;

  constructor(private topbarService: TopbarService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.topbarService
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
