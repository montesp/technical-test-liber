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


      <main className="w-full max-w-1320 min-h-screen mx-auto py-12 px-8">
        <h1 className='mb-1 text-3xl font-bold text-black tablet-sm:text-4xl desktop-sm:text-5xl desktop-md:text-7xl'>
          Lista de Usuarios
        </h1>
        <div className="flex justify-end w-full">
          <button
            onClick={changeToOpenCreateModal}
            className="w-full mx-1 mb-6 px-12 py-4 outline-none border-none rounded-xl bg-black font-semibold text-white cursor-pointer tablet-sm:w-max"
          >
            Crear usuario
          </button>
        </div>
        <UserList/>
      </main>
    </>
  );
}