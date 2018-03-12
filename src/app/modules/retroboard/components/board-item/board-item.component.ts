import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-board-item',
  template: `
    <div class="board-item">
      <div (click)="navigate()" class="board-item-content">
        <h2>{{ title }}</h2>
        <p class="simple-text">{{ created | date }}</p>
      </div>
      <button class="btn-delete" (click)="handleClick($key)"><i class="fa fa-trash"></i></button>
    </div>
  `,
  styleUrls: ['./board-item.component.scss'],
})
export class BoardItemComponent implements OnInit {

  @Input() title;
  @Input() created;
  @Input() $key;

  @Output() deleteItem: EventEmitter<{$key: string}> = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handleClick($key: string) {
    this.deleteItem.emit({$key: $key});
  }

  navigate() {
    this.router.navigate([`retro`, `topics-overview`, this.$key]);
  }

}
