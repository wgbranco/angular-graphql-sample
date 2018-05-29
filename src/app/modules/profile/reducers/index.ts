import { Action, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as fromProfiles from './profiles.reducer';

export interface ProfileState {
  refugees: fromProfiles.State,
}

export interface State extends fromRoot.State {
  profiles: ProfileState,
}

export const reducers: ActionReducerMap<ProfileState> = {
  refugees: fromProfiles.reducer,
};

export const selectProfileState = createFeatureSelector<ProfileState>('profiles');

export const selectRefugeeProfiles = createSelector(
  selectProfileState,
  state => state.refugees
);

export const selectAllRefugeeProfileEntities = createSelector(
  selectRefugeeProfiles,
  fromProfiles.getProfileEntities
);

export const selectRefugeeProfileById = (id) => createSelector(
  selectAllRefugeeProfileEntities,
  state => state[id]
)