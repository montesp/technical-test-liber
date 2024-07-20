
export interface Select {
  value:string;
  text:string;
}
export interface SelectProps {
  name: string;
  label:string;
  options: Select[];
  isDisabled: boolean;
}

export interface InputPropsProps {
  name: string;
  placeholder: string;
  label:string;
  isDisabled: boolean;
}