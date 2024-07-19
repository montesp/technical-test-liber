import { useDispatch, useSelector } from "react-redux";
import { env } from "../env/environment";
import { saveUsers } from "../app/usersSlice";
import axios from "axios";


export const useUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector( state => state.users);

  const getUsers = async() => {
    const { status, data} = await axios(`${env.apiUrl}/public/v2/users`);

    if(status === 200){
      dispatch(saveUsers(data))
    }
  }

  return {
    users,
    getUsers
  }
}