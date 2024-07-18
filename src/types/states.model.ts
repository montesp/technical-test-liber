import { User } from "./user.model";

export interface UserState {
  users: User[];
  currentUser: User;
}

export interface ModalState {
  isOpenDeleteModal: boolean
}

