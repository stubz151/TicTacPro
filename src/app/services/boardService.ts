import {COLS, ROWS} from '../constant';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  getEmptyBoard(): number[][] {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }
}
