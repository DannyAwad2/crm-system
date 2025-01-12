export type UserType = 'prospect' | 'customer' | 'partner' | 'lead';

export interface IUser {
  name: string;
  type: UserType;
  email: string;
  phone: string;
}
