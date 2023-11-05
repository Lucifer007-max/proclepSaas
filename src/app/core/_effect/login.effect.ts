import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as AuthActions from '../_action/login.action';
import { Apiservice } from './../services/apiservice.service';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions, private authService: Apiservice) {}
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map((token) => AuthActions.loginSuccess({ token })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

}
