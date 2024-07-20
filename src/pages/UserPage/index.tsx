import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { inputs, selects } from "./data";



export const UserPage = () => {
  const params = useParams();
  const { getUser, formUserData, updateFormUserData, saveUserDataForm } = useUser();
  const navigate = useNavigate();


  useEffect(() => {
    getUser(params.userId);
    saveUserDataForm(formUserData);
  },[])

  const back = () => {
    navigate('/');
  }

  return (
    <main className="w-full max-w-1320 min-h-screen mx-auto py-7 px-5">
    <h1 className="mb-5 text-5xl font-bold text-black desktop-sm:text-7xl">
      Ver usuario
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
      >
          {
            inputs.map( input => (
              <Input
                key={ input.name }
                label={ input.label }
                name={ input.name }
                placeholder={ input.placeholder }
                value={formUserData[`${input.name}`]}
                updateFormData={updateFormUserData}
                isDisabled={ input.isDisabled }
              />
            ))
          }

          {
            selects.map( select => (
              <Select
                key={ select.name }
                label={ select.label }
                name={ select.name }
                options={ select.options }
                updateFormData={updateFormUserData}
                value={formUserData[`${select.name}`]}
                isDisabled={ select.isDisabled }
              />
            ))
          }
        </form>
    </main>
  );
}