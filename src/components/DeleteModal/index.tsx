import { useModal } from "../../hooks/useModal";


export const DeleteModal = () => {
  const {
    changeToCloseDeleteModal,
    currentUser
  } = useModal();

  return (
    <main className="portal">
      <section className="modal">
        <h2>Eliminar usuario { currentUser.id } ?</h2>
        <p>Estas seguro querer eliminar al usuario { currentUser.name }</p>
        <div>
          <button onClick={changeToCloseDeleteModal} >
            Cancelar
          </button>
          <button >
            Aceptar
          </button>
        </div>
      </section>
    </main>
  );
}