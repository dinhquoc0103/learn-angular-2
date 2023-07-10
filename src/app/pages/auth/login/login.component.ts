import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userList: Array<User> = [
    { id: 1, username: 'quockgk6pro', password: '123456', age: 24, type: 'admin' },
    { id: 2, username: 'tommyshelby', password: '456789', age: 56, type: 'member' },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.userList);

  }

}
