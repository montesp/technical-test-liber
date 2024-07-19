export interface UserCreated{
  name: string;
  email: string;
  gender: string;
  status: string;
}

export interface User extends UserCreated {
  id: number;
}




