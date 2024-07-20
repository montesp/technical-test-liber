export interface Props {
  name: string;
  value: string | number;
  label:string;
  options: Select[];
  isDisabled: boolean;
  updateFormData: () => void;
}

export interface Select {
  value:string;
  text:string;
}