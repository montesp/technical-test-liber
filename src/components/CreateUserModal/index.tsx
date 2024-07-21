import { AiOutlineClose } from "react-icons/ai";
import { useModal } from "../../hooks/useModal";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import { inputs, selects } from "./data";
import { Input } from "../Input";
import { Select } from "../Select";

export const CreateUserModal = () => {
  const { changeToCloseCreateModal } = useModal();
  const { createUser, formData, updateFormData } = useUser();
  const [ isEmptyInfo, setIsEmptyInfo ] = useState(false);



  const onSubmit = (event) => {
    event.preventDefault();
    if(formData.name !== '' && formData.email !== '' && formData.gender !== '' && formData.status !== '' ){
      createUser(formData);
      changeToCloseCreateModal();
      setIsEmptyInfo(false)
    } else {
      setIsEmptyInfo(true)
    }
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
         {
            inputs.map( input => (
              <Input
                key={ input.name }
                label={ input.label }
                name={ input.name }
                placeholder={ input.placeholder }
                value={formData[`${input.name}`]}
                updateFormData={updateFormData}
                isDisabled={ input.isDisabled }
                isEmptyInfo= { isEmptyInfo }
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
                updateFormData={updateFormData}
                value={formData[`${select.name}`]}
                isDisabled={ select.isDisabled }
                isEmptyInfo= { isEmptyInfo }
              />
            ))
          }
          <div className="flex justify-between gap-3 mt-4 tablet-sm:justify-end">
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