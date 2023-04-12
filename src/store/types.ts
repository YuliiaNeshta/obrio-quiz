export interface UserInfoStateProps {
  gender: string;
  dateOfBirth: string;
  age: number;
  zodiac: string;
  children: boolean;
  singleParent: boolean;
  status: string;
  decision: string;
}

export interface StateProps {
  userInfo: UserInfoStateProps;
}
