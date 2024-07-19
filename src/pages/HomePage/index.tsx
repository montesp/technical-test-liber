import { useEffect } from "react";
import { UserList } from "../../components/UserList";

import { DeleteModal } from "../../components/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { useUser } from "../../hooks/useUser";

export const HomePage = () => {
  const { isOpenDeleteModal } = useModal();
  const { getUsers } = useUser();

  useEffect(() => {
    getUsers();
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