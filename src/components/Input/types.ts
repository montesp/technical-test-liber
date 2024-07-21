export interface Props {
  name: string;
  placeholder: string;
  value: string | number;
  label:string;
  isDisabled: boolean;
  updateFormData: () => void;
  isEmptyInfo:boolean;
}