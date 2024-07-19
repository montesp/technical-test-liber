import { useEffect } from "react";
import { UserList } from "../../components/UserList";

import { DeleteModal } from "../../components/DeleteModal";
import { useModal } from "../../hooks/useModal";
import { useUser } from "../../hooks/useUser";
import { CreateUserModal } from "../../components/CreateUserModal";

export const HomePage = () => {
  const {
    isOpenDeleteModal,
    isOpenCreateModal,
    changeToOpenCreateModal
  } = useModal();
  const { getAllUsers } = useUser();

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      {isOpenDeleteModal && (
        <DeleteModal/>
      )}

      {isOpenCreateModal && (
        <CreateUserModal/>
      )}


      <main className="home">
        <h1 className='home__title'>
          Lista de Usuarios
        </h1>
        <div className="home__buttons">
          <button
            onClick={changeToOpenCreateModal}
            className="button button--create"
          >
            Crear usuario
          </button>
        </div>
        <UserList/>
      </main>
    </>
  );
}