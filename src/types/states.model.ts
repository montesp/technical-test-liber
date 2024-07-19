import { User, UserCreated } from "./user.model";

export interface UserState {
  users: User[];
  currentUser: User;
  formData: UserCreated;
}

export interface ModalState {
  isOpenDeleteModal: boolean,
  isOpenCreateModal: boolean
}

