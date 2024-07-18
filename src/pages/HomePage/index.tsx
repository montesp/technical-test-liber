import { useEffect } from "react";
import { UserList } from "../../components/UserList";
import { env } from "../../env/environment";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveUsers } from "../../app/usersSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getInfo = async() => {
      const { status, data} = await axios(`${env.apiUrl}/public/v2/users`);

      if(status === 200){
        dispatch(saveUsers(data))
      }
    }

    getInfo();
  }, []);

  return (
    <main className="home">
      <h1 className='home__title'>
        Lista de Usuarios
      </h1>
      <div className="home__buttons">
        <button className="button button--create">Crear usuario</button>
      </div>
      <UserList/>
    </main>
  );
}