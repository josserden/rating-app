import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface NotificationProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  message: string;
  status?: 'success' | 'error';
  onClose?: () => void;
}
