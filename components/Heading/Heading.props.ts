import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface HeadingProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
