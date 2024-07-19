import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import { useUser } from "../../hooks/useUser";

export const CreateUserModal = () => {
  const { changeToCloseCreateModal } = useModal();
  const { createUser, formData, updateFormUserData } = useUser();

  const onSubmit = (event) => {
    event.preventDefault();
    createUser(formData);
  }


  return (
    <main className="portal">
      <section className="modal modal__create">
        <h2 className="modal__title modal__title--create">
          Crear usuario
        </h2>
        <button
          onClick={changeToCloseCreateModal}
          className="button button__quit"
        >
          <AiOutlineClose size={16} />
        </button>
        <form 
          className="form"
          onSubmit={onSubmit}
        >
          <div className="form__input">
            <input
              type="text"
              name="name"
              className="form__input-text"
              placeholder="Nombre"
              value={formData.name}
              onChange={updateFormUserData}
            />
          </div>
          <div className="form__input">
            <input
              type="email"
              name="email"
              className="form__input-text"
              placeholder="Correo"
              value={formData.email}
              onChange={updateFormUserData}
            />
          </div>
          <select
            className="form__select"
            name="gender"
            value={formData.gender}
            onChange={updateFormUserData}
          >
            <option value="" disabled> Selecciona tu genero </option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
          </select>

          <select
            className="form__select"
            name="status"
            value={formData.gender}
            onChange={updateFormUserData}
          >
            <option className="form__select-option form__select-option--selected" value="" disabled>
              Selecciona un estado
            </option>
            <option className="form__select-option" value="active">Activo</option>
            <option className="form__select-option" value="inactive">Inactivo</option>
          </select>

         

          <div className="modal__buttons">
            <button
              className="button button__modal button__modal--cancel"
              onClick={changeToCloseCreateModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="button button__modal button__modal--accept"
            >
              Crear
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}