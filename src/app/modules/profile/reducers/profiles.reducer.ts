import { Action } from '@ngrx/store';
import { ProfileActions, ProfileActionTypes, ReceiveDonation, ReceiveDonationSuccess, LoadProfileByIdSuccess } from '../actions/profile/profile.actions';


export interface State {
  entities: Object;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  loading: false
};


function updateRefugeeProfile(
  state: State, action: LoadProfileByIdSuccess
): State {
  return {
    ...state,
    entities: {
      ...state.entities,
      [action.payload.id]: action.payload.entity
    }
  }
}

function updateRefugeeDonationPendingStatus(
  state: State, action: ReceiveDonation
): State {

  const refugee = state.entities[action.payload.refugeeId];

  return {
    ...state,
    entities: {
      ...state.entities,
      [action.payload.refugeeId]: {
        ...refugee,
        pending_donation: true,
      }
    }
  }
}

function updateRefugeeAmountRaised(
  state: State, action: ReceiveDonationSuccess
): State {
  const refugee = state.entities[action.payload.refugeeId];

  return {
    ...state,
    entities: {
      ...state.entities,
      [action.payload.refugeeId]: {
        ...refugee,
        amount_raised: refugee.amount_raised + action.payload.donation,
        pending_donation: false,
        donated_to: true
      }
    }
  }
}

export function reducer(
  state = initialState,
  action: ProfileActions
): State {
  switch (action.type) {

    case ProfileActionTypes.LOAD_PROFILE_BY_ID_SUCCESS:
      return updateRefugeeProfile(state, action);

    case ProfileActionTypes.RECEIVE_DONATION:
      return updateRefugeeDonationPendingStatus(state, action);

    case ProfileActionTypes.RECEIVE_DONATION_SUCCESS:
      return updateRefugeeAmountRaised(state, action);

    default:
      return state;
  }
}

export const getProfileEntities = (state: State) => state.entities;
