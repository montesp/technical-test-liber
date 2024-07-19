import { useDispatch, useSelector } from "react-redux";
import { env } from "../env/environment";
import { saveUsers, updateFormInfo } from "../app/usersSlice";
import axios from "axios";
import { User, UserCreated } from "../types/user.model";


export const useUser = () => {
  const dispatch = useDispatch();
  const { users, currentUser, formData } = useSelector( state => state.users);

  const getAllUsers = async() => {
    const { status, data } = await axios.get(`${env.apiUrl}/public/v2/users`);

    if(status === 200){
      dispatch(saveUsers(data))
    }
  }

  const createUser = (newUser: UserCreated) => {
    console.log(newUser);
  }

  const deleteUser = async ( userDeleted: User ) => {
    const headers = {
      headers: { Authorization: `Bearer ${env.token}` }
    };
    const { status } = await axios.delete(`${env.apiUrl}/public/v2/users/${userDeleted.id}`, headers);

    if(status === 204){
      const newUsers = users.filter( user => user.id !== userDeleted.id);
      dispatch(saveUsers(newUsers));
    }
  }

  const updateFormUserData = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormInfo({ name, value }));
  };

  return {
    users,
    currentUser,
    formData,
    getAllUsers,
    createUser,
    deleteUser,
    updateFormUserData
  }
}