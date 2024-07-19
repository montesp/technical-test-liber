import { useDispatch, useSelector } from "react-redux";
import { openDeleteModal, closeDeleteModal, openCreateModal, closeCreateModal } from "../app/modalSlice";
import { User } from "../types/user.model";
import { saveCurrentUser } from "../app/usersSlice";


export const useModal = () => {
  const dispatch = useDispatch();
  const { isOpenDeleteModal, isOpenCreateModal } = useSelector( state => state.modal);

  const changeToOpenDeleteModal = (user: User) => {
    dispatch(saveCurrentUser(user));
    dispatch(openDeleteModal());
  }
  const changeToCloseDeleteModal = () => {
    dispatch(closeDeleteModal());
  }

  const changeToOpenCreateModal = () => {
    dispatch(openCreateModal());
  }
  const changeToCloseCreateModal = () => {
    dispatch(closeCreateModal());
  }

  return {
    isOpenDeleteModal,
    isOpenCreateModal,
    changeToOpenDeleteModal,
    changeToCloseDeleteModal,
    changeToOpenCreateModal,
    changeToCloseCreateModal
  }
}