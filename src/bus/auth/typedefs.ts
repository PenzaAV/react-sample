//state type____________________________________

export type AuthState = {
  isFetching: boolean;
  profile: IProfile | null;
  isAuthenticated: boolean;
  allowCountdown: boolean;
  isInitialised: boolean;
};

//payload types_________________________________
export type ContactUsPayload = {
  email: string;
  subject: string;
  message: string;
  image?: string;
};

export type SignUpActionPayload = {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  country: string;
  password: string;
  password_repeat: string;
  referrer_code: string;
};
export type SignInActionPayload = {
  email: string;
  password: string;
  remember: boolean;
};
export type ConfirmEmailPayload = {
  values: {
    user_id: number;
    activation_token: string;
  };
};
export type ForgotPasswordPayload = {
  email: string;
};
export type ResetPasswordPayload = {
  values: {
    values: IPassword;
    params: IPasswordParams;
  };
};
export type SetPasswordPayload = {
  values: IPassword;
  params: IPasswordParams;
};
export type FillProfileActionPayload = IProfile;
// INJECT

//common types__________________________________
export interface IProfile {
  id: number;
  last_login: string;
  email: string;
  date_of_birth: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_admin: boolean;
  email_confirmed_at: string;
  created_at: string;
  updated_at: string;
  role: UserRole;
}

export interface IPassword {
  password: string;
  password_repeat: string;
}

export interface IPasswordParams {
  reset_token: string;
  user_id: number;
}

export enum UserRole {
  admin = 'admin',
  user = 'user',
}
