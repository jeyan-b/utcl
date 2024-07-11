export const USER_LIST_REQUEST = 'User list request';
export const USER_LIST_SUCCESS = 'User list success';
export const USER_LIST_FAILED = 'User list failed';

export class UserListRequestAction{
   readonly type = USER_LIST_REQUEST
}

export class UserListSuccessAction{
  readonly type = USER_LIST_SUCCESS;

  constructor(payload?:any){

  }
}
