import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../user/UserModel';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input()
  public roomId: string;
  public users: UserModel[];
  public curUser: UserModel;
  public userNameForm: FormGroup;
  public joined = false;
  columnsToDisplay = ['UserName', 'Score'];

  constructor() {
  }
  ngOnInit() {
    this.curUser = new UserModel('', 0);
    this.userNameForm = new FormGroup({
      username: new FormControl(this.curUser.Name, [
        Validators.required,
        Validators.minLength(4),
      ])});
    this.users = [];
  }

  get username() {
    return this.userNameForm.get('username');
  }

  addUser(){
    this.users.push(new UserModel(this.userNameForm.value.username, 0));
    this.users = [...this.users];
    this.userNameForm.reset();
    this.joined = true;
  }
}
