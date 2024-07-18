import { useEffect } from "react";
import { UserList } from "../../components/UserList";
import { env } from "../../env/environment";
import axios from "axios";
import { saveUsers } from "../../app/usersSlice";
import { DeleteModal } from "../../components/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { useDispatch } from "react-redux";

export const HomePage = () => {
  const { isOpenDeleteModal } = useModal();
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
    <>
      {isOpenDeleteModal && (
        <DeleteModal/>
      )}
      <main className="home">
        <h1 className='home__title'>
          Lista de Usuarios
        </h1>
        <div className="home__buttons">
          <button className="button button--create">Crear usuario</button>
        </div>
        <UserList/>
      </main>
    </>
  );
}