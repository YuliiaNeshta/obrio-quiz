export interface CustomSelectProps {
  options: string[] | number[];
  placeholder: string;
  onChange: (value: string | number) => void;
}
