import { InputProps, SelectProps } from "../../types/form.model";

export const inputs: InputProps = [
  {
    label: 'Nombre',
    name: 'name',
    placeholder: 'Ingresa tu nombre',
    isDisabled: false,
  },
  {
    label: 'Correo',
    name: 'email',
    placeholder: 'Ingresa tu correo',
    isDisabled: false,
  },
];

export const selects: SelectProps = [
  {
    label: 'Genero',
    name: 'gender',
    options: [
      {
        value: 'male',
        text: 'Hombre'
      },
      {
        value: 'female',
        text: 'Mujer'
      },
    ],
    isDisabled: false,
  },
  {
    label: 'Estado',
    name: 'status',
    options: [
      {
        value: 'active',
        text: 'Activo'
      },
      {
        value: 'inactive',
        text: 'Inactivo'
      },
    ],
    isDisabled: false,
  },

];
