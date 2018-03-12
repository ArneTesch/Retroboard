import {Component, OnInit} from '@angular/core';
import {RetroSandbox} from '../../sandboxes/retro.sandbox';
import {Observable} from 'rxjs/Observable';
import {RetroBoard} from '../../entities/retro-board';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-boards-overview',
  template: `
    <div class="boards-overview">
      <app-board-item
        *ngFor="let board of boards$ | async"
        [title]="board.title"
        [created]="board.date"
        [$key]="board.$key"
        (deleteItem)="handleDelete($event)">
      </app-board-item>
    </div>

    <div *appSidebar>
      <app-create-retroboard-form
        (createBoard)="createBoard($event)"
      ></app-create-retroboard-form>
    </div>
  `,
  styleUrls: ['./boards-overview.component.scss'],
})
export class BoardsOverviewComponent implements OnInit {

  boards$: Observable<Array<RetroBoard>>;

  constructor(private sandbox: RetroSandbox) {
  }

  ngOnInit() {
    this.boards$ = this.sandbox.getAll('boards/')
      .pipe(
        map(data => {
          data.sort((a, b) => {
            return a.date > b.date ? -1 : 1;
          });
          return data;
        })
      );
  }

  handleDelete(board: {$key: string}) {
    this.sandbox.deleteBoard(board.$key);
  }

  createBoard(retroBoard: RetroBoard) {
    this.sandbox.createRetroBoard(retroBoard);
  }

}
