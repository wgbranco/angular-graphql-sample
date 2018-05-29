import { Action } from '@ngrx/store';

export enum ProfileActionTypes {
  LOAD_PROFILE_BY_ID = '[Profiles] Load Profile by ID',
  LOAD_PROFILE_BY_ID_SUCCESS = '[Profiles] Load Profile by ID Success',
  LOAD_PROFILE_BY_ID_FAILURE = '[Profiles] Load Profile by ID Failure',
  RECEIVE_DONATION = '[Profiles] Receive Donation',
  RECEIVE_DONATION_SUCCESS = '[Profiles] Receive Donation Success',
  RECEIVE_DONATION_FAILURE = '[Profiles] Receive Donation Failure',
}

export class LoadProfileById implements Action {
  readonly type = ProfileActionTypes.LOAD_PROFILE_BY_ID;

  constructor(public payload: string) {}
}

export class LoadProfileByIdSuccess implements Action {
  readonly type = ProfileActionTypes.LOAD_PROFILE_BY_ID_SUCCESS;

  constructor(public payload: {id: string, entity: Object}) {}
}

export class LoadProfileByIdFailure implements Action {
  readonly type = ProfileActionTypes.LOAD_PROFILE_BY_ID_FAILURE;
}

export class ReceiveDonation implements Action {
  readonly type = ProfileActionTypes.RECEIVE_DONATION;

  constructor(public payload: {refugeeId: string, donation: number}) {}
}

export class ReceiveDonationSuccess implements Action {
  readonly type = ProfileActionTypes.RECEIVE_DONATION_SUCCESS;

  constructor(public payload: {refugeeId: string, donation: number}) {}
}

export type ProfileActions =
  | LoadProfileById
  | LoadProfileByIdSuccess
  | LoadProfileByIdFailure
  | ReceiveDonation
  | ReceiveDonationSuccess;
