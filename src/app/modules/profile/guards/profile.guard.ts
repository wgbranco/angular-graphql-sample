import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromProfiles from '../reducers';
import { LoadProfileById } from '../actions/profile/profile.actions';

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(
    private _store: Store<fromProfiles.State>
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean
    {
      this._store.dispatch(new LoadProfileById(next.params['id']));
      
      return true;
  }
}
