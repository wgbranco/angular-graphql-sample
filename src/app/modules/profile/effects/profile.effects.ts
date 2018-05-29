import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProfileService } from '../services/profile.service';
import { ProfileActionTypes, LoadProfileById, LoadProfileByIdSuccess, LoadProfileByIdFailure, ReceiveDonation, ReceiveDonationSuccess } from '../actions/profile/profile.actions';
import { map, exhaustMap, catchError, zip, combineLatest, delay } from 'rxjs/operators';
import { of, interval } from 'rxjs';

@Injectable()
export class ProfileEffects {

  @Effect({dispatch: true})
  loadProfile$ = this.actions$.pipe(
    ofType<LoadProfileById>(ProfileActionTypes.LOAD_PROFILE_BY_ID),
    map(action => action.payload),
    exhaustMap((id) =>
      this.profileService
      .loadProfileById(id)
      .pipe(
        map((result) => new LoadProfileByIdSuccess({id: id, entity: result.data.refugee})),
        catchError((error) => of(new LoadProfileByIdFailure()))
      )
    )
  )

  @Effect({dispatch: true})
  receiveDonation$ = this.actions$.pipe(
    ofType<ReceiveDonation>(ProfileActionTypes.RECEIVE_DONATION),
    exhaustMap(action => {
      return of(new ReceiveDonationSuccess(action.payload)).pipe(delay(750));
    })
  )

  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}
