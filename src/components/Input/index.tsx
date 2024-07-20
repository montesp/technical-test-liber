import { Props } from "./types";

export const Input  = ({ isDisabled, label, name, placeholder, updateFormData, value }: Props) => {
  return (
    <div className={`flex flex-col gap-2 ${isDisabled && 'opacity-50'}`}>
      <label
        className="text-xl font-semibold"
        htmlFor={name}
      >
        { label }
      </label>
      <div className={`p-4 border border-b border-gray-300 rounded-lg ${isDisabled && 'bg-gray-300'}`}>
        <input
          type="text"
          name={name}
          className={`w-full outline-none border-none text-lg font-medium placeholder:text-gray-300 ${isDisabled && 'bg-gray-300'}` }
          placeholder={placeholder}
          value={value}
          onChange={updateFormData}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}