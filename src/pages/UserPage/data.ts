import { InputProps, SelectProps } from "../../types/form.model";

export const inputs: InputProps = [
  {
    label: 'Nombre',
    name: 'name',
    placeholder: 'Ingresa tu nombre',
    isDisabled: true,
  },
  {
    label: 'Correo',
    name: 'email',
    placeholder: 'Ingresa tu correo',
    isDisabled: true,
  },
];

export const selects: SelectProps = [
  {
    label: 'Genero',
    name: 'genre',
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
    isDisabled: true,
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
    isDisabled: true,
  },

];
