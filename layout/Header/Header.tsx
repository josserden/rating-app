import { useState, useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import { motion, useReducedMotion } from 'framer-motion';
import classNames from 'classnames';
import { ButtonIcon, Logo } from '@components/index';
import { Sidebar } from 'layout/Sidebar/Sidebar';
import { HeaderProps } from './Header.props';

export const Header: FC<HeaderProps> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
    },
  };
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <header
      className={classNames(className, 'bg-slate-50 py-4 shadow')}
      {...props}
    >
      <div className="container flex items-center justify-between">
        <Logo>RatingApp</Logo>
        <ButtonIcon
          appearance="primary"
          icon="menu"
          onClick={() => setIsOpen(true)}
        />

        <motion.div
          variants={variants}
          initial="closed"
          animate={isOpen ? 'opened' : 'closed'}
          className="fixed right-0 bottom-0 top-0 left-0 z-50 overflow-y-auto bg-slate-50 p-5"
        >
          <Sidebar className="grid grid-cols-1 gap-5" />
          <ButtonIcon
            appearance="primary"
            icon="close"
            className="absolute top-5 right-5 z-20"
            onClick={() => setIsOpen(false)}
          />
        </motion.div>
      </div>
    </header>
  );
};
