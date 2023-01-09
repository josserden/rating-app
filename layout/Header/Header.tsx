import { ButtonIcon, Logo } from '@components/index';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Sidebar } from 'layout/Sidebar/Sidebar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
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
