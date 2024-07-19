import { useDispatch, useSelector } from "react-redux";
import { openDeleteModal, closeDeleteModal } from "../app/modalSlice";
import { User } from "../types/user.model";
import { saveUser } from "../app/usersSlice";


export const useModal = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector( state => state.users);
  const { isOpenDeleteModal } = useSelector( state => state.modal);

  const changeToOpenDeleteModal = (user: User) => {
    dispatch(saveUser(user));
    dispatch(openDeleteModal());
  }
  const changeToCloseDeleteModal = () => {
    dispatch(closeDeleteModal());
  }

  return {
    currentUser,
    isOpenDeleteModal,
    changeToOpenDeleteModal,
    changeToCloseDeleteModal
  }


}