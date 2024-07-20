import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { UserCreated } from "../../types/user.model";
import { AiFillEdit, AiOutlineArrowLeft } from "react-icons/ai";

export const EditUserPage = () => {

  const params = useParams();
  const { getUser, editUser, formUserData, updateFormUserData, saveUserDataForm } = useUser();
  const navigate = useNavigate();


  useEffect(() => {
    getUser(params.userId);
    saveUserDataForm(formUserData);
  },[])

  const onSubmit = (event) => {
    event.preventDefault();
    const dataEdit: UserCreated = {
      name: formUserData.name,
      email: formUserData.email,
      gender: formUserData.gender,
      status: formUserData.status
    }
    editUser(formUserData.id, dataEdit);
    navigate('/');
  }

  const back = () => {
    navigate('/');
  }

  return (
    <main className="w-full max-w-1320 min-h-screen mx-auto py-7 px-5">
      <h1 className="mb-5 text-5xl font-bold text-black desktop-sm:text-7xl">
        Editar usuario
      </h1>
      <div className="flex justify-end w-full">
          <button
            onClick={back}
            className="flex justify-center items-center gap-5 w-full mx-1 mb-6 px-12 py-4 outline-none border-none rounded-xl bg-black font-semibold text-white cursor-pointer tablet-sm:w-max tablet-sm:justify-between"
          >
            <AiOutlineArrowLeft size={14} />
            <span>
              Regresar
            </span>
          </button>
        </div>
      <form
          className="grid grid-cols-1 gap-4 w-full px-4 py-8  rounded-2xl shadow-md shadow-gray-300 bg-white tablet-sm:grid-cols-2 tablet-sm:gap-8 "
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-2">
            <label
              className="text-xl font-semibold"
              htmlFor="name"
            >
              Nombre
            </label>
            <div className="p-4 border border-b border-gray-300 rounded-lg">
              <input
                type="text"
                name="name"
                className="w-full outline-none border-none text-lg font-medium placeholder:text-gray-300"
                placeholder="Ingresa tu nombre"
                value={formUserData.name}
                onChange={updateFormUserData}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <label
              className="text-xl font-semibold"
              htmlFor="email"
            >
              Correo
            </label>
            <div className="p-4 border border-b border-gray-300 rounded-lg">
              <input
                type="email"
                name="email"
                className="w-full outline-none border-none text-lg font-medium"
                placeholder="Correo"
                value={formUserData.email}
                onChange={updateFormUserData}
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
              className="w-full p-4 border border-gray-300 rounded-lg appearance-none bg-white text-lg text-black font-medium cursor-pointer"
              name="gender"
              value={formUserData.gender}
              onChange={updateFormUserData}
            >
              <option className="p-4 bg-white text-md text-black" value="" disabled> Selecciona tu genero </option>
              <option className="p-4 bg-white text-md text-black" value="male">Hombre</option>
              <option className="p-4 bg-white text-md text-black" value="female">Mujer</option>
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
              className="w-full p-4 border border-gray-300 rounded-lg appearance-none bg-white text-lg text-black font-medium cursor-pointer"
              name="status"
              value={formUserData.status}
              onChange={updateFormUserData}
            >
              <option className="p-4 bg-white text-md text-black" value="" disabled>
                Selecciona un estado
              </option>
              <option className="p-4 bg-white text-md text-black" value="active">Activo</option>
              <option className="p-4 bg-white text-md text-black" value="inactive">Inactivo</option>
            </select>
          </div>
          <div className="flex justify-end w-full tablet-sm:col-span-2">
            <button
              type="submit"
              className="flex justify-center items-center gap-3 w-full mx-1 py-4 px-5  border-none rounded-lg outline-none bg-black font-semibold text-white cursor-pointer tablet-sm:py-5 tablet-sm:px-7 tablet-sm:w-max"
            >
              <AiFillEdit size={14} />
              <span>
                Editar
              </span>
            </button>
          </div>
        </form>
    </main>
  );
}