import {Component, Input, OnInit} from '@angular/core';
import {COLS, ROWS} from '../constant';
import {BoardService} from '../services/boardService';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input()
  board?: string[][];

  constructor(private service: BoardService) {
  }

  ngOnInit(): void {
    if (!this.board) {
      this.board = this.service.getEmptyBoard();
    }
  }

  ClickedCell(x: number, y: number): boolean {
    console.log(x,y);
    if (this.service.allowedMove(x, y, this.board)) {
      this.service.makeMove(x, y);
    }
    return false;
  }
}
