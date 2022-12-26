import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useScrollYPosition } from 'hooks';
import { ButtonIcon } from '..';
import styles from './ToTop.module.css';

export const ToTop = (): JSX.Element => {
  const y = useScrollYPosition();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: y / window.innerHeight,
    });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      className={styles.top}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
};
