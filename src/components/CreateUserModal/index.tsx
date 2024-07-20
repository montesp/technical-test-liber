import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import { useUser } from "../../hooks/useUser";

export const CreateUserModal = () => {
  const { changeToCloseCreateModal } = useModal();
  const { createUser, formData, updateFormData } = useUser();

  const onSubmit = (event) => {
    event.preventDefault();
    createUser(formData);
    changeToCloseCreateModal();
  }

  return (
    <main className="absolute top-0 right-0 left-0 bottom-0 z-10 flex justify-center items-center w-screen h-screen bg-black bg-opacity-30">
      <section className="relative flex flex-col w-[460px] max-w-[280px] max-h-[820px] px-8 py-6 rounded-lg bg-white mobile-md:max-w-[380px] tablet-sm:py-10 tablet-sm:px-12 tablet-md:max-w-[420px]">
        <h2 className="mb-6 text-3xl font-semibold text-black tablet-sm:text-4xl">
          Crear usuario
        </h2>
        <button
          onClick={changeToCloseCreateModal}
          className="absolute top-8 right-7 mx-1 bg-white font-semibold text-gray-100 cursor-pointer tablet-sm:top-12 tablet-sm:right-11"
        >
          <AiOutlineClose size={16} />
        </button>
        <form
          className="w-full"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-2">
            <label
              className="text-xl font-semibold"
              htmlFor="name"
            >
              Nombre
            </label>
            <div className="p-4 mb-4 border border-gray-300 rounded-lg">
              <input
                type="text"
                name="name"
                className="w-full text-lg outline-none  font-medium text-family"
                placeholder="Ingresa el nombre"
                value={formData.name}
                onChange={updateFormData}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-xl font-semibold"
              htmlFor="email"
            >
              Email
            </label>
            <div className="p-4 mb-4 border border-gray-300 rounded-lg">
              <input
                type="email"
                name="email"
                className="w-full text-lg outline-none font-medium text-family"
                placeholder="Correo"
                value={formData.email}
                onChange={updateFormData}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-xl font-semibold"
              htmlFor="genre"
            >
              Genero
            </label>
            <select
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg outline-none bg-white text-lg text-family text-black appearance-none cursor-pointer"
              name="gender"
              value={formData.gender}
              onChange={updateFormData}
            >
              <option className="p-4 bg-white text-md text-black text-family" value="" disabled> Selecciona tu genero </option>
              <option className="p-4 bg-white text-md text-black text-family" value="male">Hombre</option>
              <option className="p-4 bg-white text-md text-black text-family" value="female">Mujer</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-xl font-semibold"
              htmlFor="status"
            >
              Estado
            </label>
            <select
              className="w-full mb-4 p-4 border border-gray-300 rounded-lg outline-none bg-white text-lg text-family text-black  appearance-none cursor-pointer"
              name="status"
              value={formData.status}
              onChange={updateFormData}
            >
              <option className="p-4 bg-white text-md  text-black text-family" value="" disabled>
                Selecciona un estado
              </option>
              <option className="p-4 bg-white text-md  text-black text-family" value="active">Activo</option>
              <option className="p-4 bg-white text-md  text-black text-family" value="inactive">Inactivo</option>
            </select>
          </div>
          <div className="flex justify-between gap-3 tablet-sm:justify-end">
            <button
              className="w-2/5 px-5 py-4 rounded-lg text-black text-md font-semibold hover:outline-1 hover:outline hover:outline-black tablet-sm:w-1/3 tablet-sm:text-lg"
              onClick={changeToCloseCreateModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-2/5 px-7 py-4 rounded-lg bg-black font-semibold text-white tablet-sm:w-1/3 tablet-sm:text-lg"
            >
              Crear
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}