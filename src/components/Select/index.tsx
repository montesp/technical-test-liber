import { Props } from "./types";

export const Select = ({isDisabled, label, name, options, updateFormData, value, isEmptyInfo}: Props) => {
  return (
    <div className={`flex flex-col gap-2 mb-2 ${isDisabled && 'opacity-50'}`}>
      <label
        className="text-xl font-semibold"
        htmlFor={ name }
      >
        { label }
      </label>
      <select
        className={`w-full p-4 border border-gray-300  ${isDisabled ? 'bg-gray-300':'bg-white'} rounded-lg appearance-none outline-none bg-gray text-lg text-black font-medium cursor-pointer`}
        name={ name }
        value={ value }
        onChange={ updateFormData }
        disabled={ isDisabled }
      >
        <option className="p-4 bg-white text-md text-black" value="" disabled> Selecciona {label} </option>
        {
          options.map( option => (
            <option className="p-4 bg-white text-md text-black" value={option.value}>
              { option.text }
            </option>
          ))
        }
      </select>
      { (isEmptyInfo && value === '') && (
        <p className="text-lg text-error-100">
          { label } es requerido
        </p>
      )}
    </div>
  );
}