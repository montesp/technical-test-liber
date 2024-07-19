import { useDispatch, useSelector } from "react-redux";
import { env } from "../env/environment";
import { saveFormUserInfo, saveUser, saveUsers, updateFormInfo, updateFormUserInfo } from "../app/usersSlice";
import axios from "axios";
import { User, UserCreated } from "../types/user.model";


export const useUser = () => {
  const dispatch = useDispatch();
  const { users, currentUser, formData, formUserData  } = useSelector( state => state.users);

  const getAllUsers = async() => {
    const { status, data } = await axios.get(`${env.apiUrl}/public/v2/users`);

    if(status === 200){
      dispatch(saveUsers(data))
    }
  }

  const getUser = async (userId: number) => {
    const { status, data } = await axios.get(`${env.apiUrl}/public/v2/users/${userId}`);
    if(status === 200){
      dispatch(saveFormUserInfo(data));
    }
  }

  const createUser = async (newUser: UserCreated) => {
    const headers = {
      headers: { Authorization: `Bearer ${env.token}` }
    };
    const { status, data} = await axios.post(`${env.apiUrl}/public/v2/users/`, newUser, headers);
    if(status === 201){
      dispatch(saveUser(data));
    }
  }

  const editUser = async (userId:number, editedUser: UserCreated) => {
    const headers = {
      headers: { Authorization: `Bearer ${env.token}` }
    };
    await axios.put(`${env.apiUrl}/public/v2/users/${userId}`,editedUser, headers);
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

  const updateFormData = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormInfo({ name, value }));
  };

  const updateFormUserData = (event) => {
    const { name, value } = event.target;
    dispatch(updateFormUserInfo({ name, value }));
  };

  const saveUserDataForm = (user: User) => {
    dispatch(saveFormUserInfo(user));
  }

  return {
    users,
    currentUser,
    formData,
    formUserData,
    getAllUsers,
    getUser,
    createUser,
    editUser,
    deleteUser,
    updateFormData,
    updateFormUserData,
    saveUserDataForm,
  }
}