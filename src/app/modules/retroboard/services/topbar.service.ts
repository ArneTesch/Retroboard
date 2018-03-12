import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TopbarService {

  private currentState = new BehaviorSubject<TemplateRef<any> | null>(null);
  readonly contents = this.currentState.asObservable();

  setContents(ref: TemplateRef<any>): void {
    this.currentState.next(ref);
  }

  clearContents(): void {
    this.currentState.next(null);
  }
}
