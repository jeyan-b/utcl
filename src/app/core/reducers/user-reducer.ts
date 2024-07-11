import { Action } from "../actions";
import { USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../actions/user-actions";

export interface UserReducerState{
  loading: boolean;
  loaded : boolean;
  users: any[];
}

const initialState: UserReducerState = {
  loaded : false,
  loading: false,
  users: []
}

export function UserReducer(state = initialState, action: Action): any{
  switch(action.type){
    case USER_LIST_REQUEST : {
      return {...state, loading: true};
    }
    case USER_LIST_SUCCESS: {
      const data = action.payload;
      return {...state, loading: false, loaded: true, users: data};
    }
  }
}
