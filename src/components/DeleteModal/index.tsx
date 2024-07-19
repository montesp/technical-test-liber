import { useModal } from "../../hooks/useModal";
import { AiOutlineClose } from "react-icons/ai";
import { useUser } from "../../hooks/useUser";


export const DeleteModal = () => {
  const {
    changeToCloseDeleteModal,
    currentUser
  } = useModal();
  const { deleteUser } = useUser();

  const deleteUserAndCloseModal = () => {
    deleteUser(currentUser);
    changeToCloseDeleteModal();
  }

  return (
    <main className="portal">
      <section className="modal">
        <h2 className="modal__title">
          Eliminar usuario <span className="modal__title--user"> { currentUser.id } </span> 
        </h2>
        <button
          onClick={changeToCloseDeleteModal}
          className="button button__quit"
        >
          <AiOutlineClose size={16} />
        </button>
        <p className="modal__text">
          ¿Estas seguro querer eliminar al usuario <span className="modal__text--user">{ currentUser.name }</span> ?
        </p>
        <div className="modal__buttons">
          <button
            className="button button__modal button__modal--cancel"
            onClick={changeToCloseDeleteModal}
          >
            Cancelar
          </button>
          <button
            onClick={deleteUserAndCloseModal}
            className="button button__modal button__modal--accept"
          >
            Aceptar
          </button>
        </div>
      </section>
    </main>
  );
}