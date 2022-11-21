import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from 'react';

export interface LogoProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode;
}
