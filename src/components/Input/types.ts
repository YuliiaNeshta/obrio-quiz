export interface InputProps {
  placeholder: string;
  type: 'email' | 'number' | 'text';
  onValidate: (arg0: boolean) => void;
}
