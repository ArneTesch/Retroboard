import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RetroItem} from '../entities/retro-item';
import {AngularFireDatabase} from 'angularfire2/database';
import { RetroBoard } from '../entities/retro-board';

@Injectable()
export class RetroService {

  basePath = 'http://localhost:3000/retroitems';

  constructor(private http: HttpClient,
              private db: AngularFireDatabase) {}

  getAll(query: string) {
    return this.db.list(query).snapshotChanges()
      .map(changes => changes.map(c => ({$key: c.payload.key, ...c.payload.val()})));
  }

  create(item: RetroItem, boardId: string) {
    return this.db.list(`boards/${boardId}/retroitems`).push(item).key;
  }

  createBoard(board: RetroBoard) {
    return this.db.list('boards').push(board);
  }

  update(newValue: RetroItem, boardId: string) {
    const {$key, ...rest} = newValue;
    return this.db.object(`boards/${boardId}/retroitems/${$key}`)
      .update(rest);
  }

  delete(key: string, boardId: string) {
    return this.db.object(`boards/${boardId}/retroitems/${key}`)
      .remove();
  }

  deleteBoard(boardId: string) {
    return this.db.list(`boards/${boardId}`)
      .remove();
  }

}
