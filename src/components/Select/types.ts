export interface Props {
  name: string;
  value: string | number;
  label:string;
  options: Select[];
  isDisabled: boolean;
  updateFormData: () => void;
  isEmptyInfo: boolean;
}

export interface Select {
  value:string;
  text:string;
}