import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>{
  size?: 'sm' | 'md' | 'xl';
  children: ReactNode
}
