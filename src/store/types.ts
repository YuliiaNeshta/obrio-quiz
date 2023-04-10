export interface UserInfoStateProps {
  gender: string;
  dateOfBirth: string;
  age: string;
  zodiac: string;
  children: boolean;
  singleParent: boolean;
  status: string;
  decision: string;
}

export interface StateProps {
  userInfo: UserInfoState;
}
