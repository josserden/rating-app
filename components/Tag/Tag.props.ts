import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{

  size?: 'sm' | 'md' ;
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string
}
