import { useModal } from "../../hooks/useModal";
import { AiOutlineClose } from "react-icons/ai";
import { useUser } from "../../hooks/useUser";


export const DeleteModal = () => {
  const {
    changeToCloseDeleteModal,
  } = useModal();
  const { deleteUser, currentUser } = useUser();

  const deleteUserAndCloseModal = () => {
    deleteUser(currentUser);
    changeToCloseDeleteModal();
  }

  return (
    <main className="absolute top-0 right-0 left-0 bottom-0 z-10 flex justify-center items-center w-screen h-screen bg-black bg-opacity-30">
      <section className="relative flex flex-col w-[460px] max-w-[280px] max-h-[820px] px-8 py-6 rounded-lg bg-white mobile-md:max-w-[380px] tablet-sm:py-10 tablet-sm:px-12 ">
        <h2 className="mb-6 text-2xl font-medium text-black tablet-sm:text-3xl">
          Eliminar usuario <span className="font-bold"> { currentUser.id } </span>
        </h2>
        <button
          onClick={changeToCloseDeleteModal}
          className="absolute top-7 right-7 mx-1 bg-white font-semibold text-gray-100 cursor-pointer tablet-sm:top-12 tablet-sm:right-11"
        >
          <AiOutlineClose size={16} />
        </button>
        <p className="mb-12 text-lg font-semibold">
          ¿Estas seguro querer eliminar al usuario <span className="font-extrabold">{ currentUser.name }</span> ?
        </p>
        <div className="flex justify-between gap-3 tablet-sm:justify-end">
          <button
            className="w-2/5 px-5 py-4 rounded-lg text-black text-md font-semibold hover:outline-1 hover:outline hover:outline-black tablet-sm:w-1/3 tablet-sm:text-lg"
            onClick={changeToCloseDeleteModal}
          >
            Cancelar
          </button>
          <button
            onClick={deleteUserAndCloseModal}
            className="w-2/5 px-7 py-4 rounded-lg bg-error-100 font-semibold tablet-sm:w-1/3 tablet-sm:text-lg"
          >
            Eliminar
          </button>
        </div>
      </section>
    </main>
  );
}