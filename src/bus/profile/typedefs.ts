//state type____________________________________
import * as yup from 'yup';

export type ProfileState = {
  isFetching: boolean;
  git: GitSettings | null;
};

//payload types_________________________________
export type FillProfileActionPayload = unknown;
export type FetchProfileActionPayload = unknown;
export type SetGitSettingsActionPayload = GitSettings;
export type FillGitSettingsActionPayload = GitSettings;
export type UpdateAvatarActionPayload = unknown;
// INJECT

//common types__________________________________

export type GitSettings = {
  domainUrl?: string;
  projectId?: number;
  accessToken?: string;
};
