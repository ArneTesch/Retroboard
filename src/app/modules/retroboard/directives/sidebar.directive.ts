import { Directive, OnInit, TemplateRef, } from '@angular/core';
import { LeftNavService } from '../services/left-nav.service';

@Directive({
  selector: '[appSidebar]',
})
export class SidebarDirective implements OnInit {
  /**
   * @param {TemplateRef<any>} templateRef
   *   -- the templateRef to be potentially rendered
   * @param {LeftNavService} leftNavService
   *  -- service to clear and set templateRef
   */
  constructor(private leftNavService: LeftNavService,
              private templateRef: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.leftNavService.setContents(this.templateRef);
  }
}
