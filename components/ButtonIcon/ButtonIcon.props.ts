import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { XMarkIcon, ChevronUpIcon, Bars3Icon } from '@heroicons/react/24/solid';

export const icons = {
  close: XMarkIcon,
  up: ChevronUpIcon,
  menu: Bars3Icon,
};

export type ButtonIconTypes = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: ButtonIconTypes;
  appearance: 'primary' | 'white';
}
