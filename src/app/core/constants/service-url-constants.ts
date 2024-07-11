export interface DashboardServiceInterface{
  getDetails : string;
  getAllUsers : string;
}

export const DashboardServiceUrls : DashboardServiceInterface = {
  getDetails : 'hello/name',
  getAllUsers : 'user/all'
}

export interface LoginServiceInterface{
  getloginTokens : string;
}

export const LoginServiceUrls : LoginServiceInterface = {
  getloginTokens : 'user/login'
}

export interface AppServiceInterface{
  getRefreshTokens : string;
}

export const AppServiceUrls :  AppServiceInterface = {
  getRefreshTokens : 'user/refreshToken'
}

export interface LoiServiceInterface{
  postAgencyTokens : string;
}

export const LoiServiceUrls :  LoiServiceInterface = {
  postAgencyTokens : 'agency'
}


