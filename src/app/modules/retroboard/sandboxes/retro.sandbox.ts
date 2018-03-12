import {Injectable} from '@angular/core';
import {RetroService} from '../services/retro.service';
import {RetroItem} from "../entities/retro-item";
import {AngularFireDatabase} from 'angularfire2/database';
import {RetroBoard} from '../entities/retro-board';

@Injectable()
export class RetroSandbox {
  constructor(private service: RetroService) {
  }

  getAll(query: string) {
    return this.service.getAll(query);
  }

  createRetroItem(item: RetroItem, boardId: string) {
    return this.service.create(item, boardId);
  }

  createRetroBoard(board: RetroBoard) {
    return this.service.createBoard(board);
  }

  updateRetroItem(newValue: RetroItem, boardId: string) {
    return this.service.update(newValue, boardId);
  }

  deleteItem(key: string, boardId: string) {
    return this.service.delete(key, boardId);
  }

  deleteBoard(boardId: string) {
    return this.service.deleteBoard(boardId);
  }
}
