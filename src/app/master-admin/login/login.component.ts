import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/core/_action/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
  }


  login(username: string, password: string): void {
    this.store.dispatch(AuthActions.login({ username, password }));
  }

}
