import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}
const WrapperAnimationHoverButton = ({ children }: Props) => {
  return (
    <motion.button
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default WrapperAnimationHoverButton;
