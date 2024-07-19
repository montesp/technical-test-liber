import { useDispatch, useSelector } from "react-redux";
import { env } from "../env/environment";
import { saveUsers } from "../app/usersSlice";
import axios from "axios";
import { User } from "../types/user.model";


export const useUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector( state => state.users);

  const getAllUsers = async() => {
    const { status, data } = await axios.get(`${env.apiUrl}/public/v2/users`);

    if(status === 200){
      dispatch(saveUsers(data))
    }
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

  return {
    users,
    getAllUsers,
    deleteUser
  }
}