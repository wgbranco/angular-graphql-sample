import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProfile from '../../reducers';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'apollo-client/util/Observable';

@Component({
  selector: 'profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss']
})
export class ProfileDetailPage implements OnInit, OnDestroy {
  profile$: Store<any>;
  refugeeId: string;
  subs: Subscription;

  constructor(
    private _store:Store<fromProfile.ProfileState>,
    private _route: ActivatedRoute
  ) { }

  ngOnInit()
  {
    this.subs = this._route.paramMap.subscribe(
      params => {
        this.refugeeId = params.get('id');
        this.profile$ = this._store.select(fromProfile.selectRefugeeProfileById(this.refugeeId));
      }
    );
  }

  ngOnDestroy() {
    if (this.subs) this.subs.unsubscribe();
  }

}
