import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RetroItem} from '../../entities/retro-item';

@Component({
  selector: 'app-retro-item',
  template: `
    <li class="retro-item">
      <div class="retro-item-content">
        <h3>{{ title }}</h3>
        <p class="caption">{{ description }}</p>
      </div>
      <div class="retro-item-actions">
        <button class="btn btn-delete" (click)="handleClick(item)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </li>
  `,
  styleUrls: ['./retro-item.component.scss'],
})
export class RetroItemComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() item;

  @Output() deleteItem: EventEmitter<{key: string}> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick(item: RetroItem) {
    this.deleteItem.emit({key: item.$key});
  }

}
