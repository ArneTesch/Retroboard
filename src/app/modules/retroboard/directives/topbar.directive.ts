import { Directive, OnInit, TemplateRef } from '@angular/core';
import { TopbarService } from '../services/topbar.service';

@Directive({
  selector: '[appTopbar]',
})
export class TopbarDirective implements OnInit {

  /**
   * @param {TemplateRef<any>} templateRef
   *   -- the templateRef to be potentially rendered
   * @param {TopbarService} topbarService
   *  -- service to clear and set templateRef
   */
  constructor(private topbarService: TopbarService,
              private templateRef: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.topbarService.setContents(this.templateRef);
  }
}
