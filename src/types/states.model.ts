import { User, UserCreated } from "./user.model";

export interface UserState {
  users: User[];
  currentUser: User;
  formData: UserCreated;
  formUserData: User;
}

export interface ModalState {
  isOpenDeleteModal: boolean,
  isOpenCreateModal: boolean
}

