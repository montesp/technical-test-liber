import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { UserCreated } from "../../types/user.model";

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

  return (
    <main className="w-full max-w-1320 min-h-screen mx-auto py-7 px-5">
      <h1 className="mb-5 text-5xl font-bold text-black desktop-sm:text-7xl">
        Editar usuario
      </h1>
      <form
          className="grid grid-cols-1 gap-4 w-full tablet-sm:grid-cols-2 tablet-sm:gap-8"
          onSubmit={onSubmit}
        >
          <div className="p-4 border border-b border-gray-100 rounded-lg">
            <input
              type="text"
              name="name"
              className="w-full outline-none border-none text-lg font-medium"
              placeholder="Nombre"
              value={formUserData.name}
              onChange={updateFormUserData}
            />
          </div>
          <div className="p-4 border border-b border-gray-100 rounded-lg">
            <input
              type="email"
              name="email"
              className="w-full outline-none border-none text-lg font-medium"
              placeholder="Correo"
              value={formUserData.email}
              onChange={updateFormUserData}
            />
          </div>
          <select
            className="w-full p-4 border border-gray-100 rounded-lg appearance-none bg-white text-lg text-black font-medium cursor-pointer"
            name="gender"
            value={formUserData.gender}
            onChange={updateFormUserData}
          >
            <option className="p-4 bg-white text-md text-black" value="" disabled> Selecciona tu genero </option>
            <option className="p-4 bg-white text-md text-black" value="male">Hombre</option>
            <option className="p-4 bg-white text-md text-black" value="female">Mujer</option>
          </select>

          <select
            className="w-full p-4 border border-gray-100 rounded-lg appearance-none bg-white text-lg text-black font-medium cursor-pointer"
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
          <div className="flex justify-end w-full col-span-2">
            <button
              type="submit"
              className="mx-1 py-4 px-5  border-none rounded-lg outline-none bg-black font-semibold text-white cursor-pointer"
            >
              Editar
            </button>
          </div>
        </form>
    </main>
  );
}