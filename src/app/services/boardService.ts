import {COLS, ROWS} from '../constant';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  getEmptyBoard(): string[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill('-'));
  }

  allowedMove(x: number, y: number, board: string[][]) {
    return board[x][y] === '-';
  }

  makeMove(x: number, y: number): void {
  }
}
