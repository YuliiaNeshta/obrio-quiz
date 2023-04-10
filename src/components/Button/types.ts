import { ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent) => void;
  type: 'gradient' | 'fill' | 'white' | 'bordered';
}
