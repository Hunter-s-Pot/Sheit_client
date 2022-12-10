import React from 'react';
import { motion } from 'framer-motion';
import * as colors from '@styles/colors';
import { APP_HEADER_H } from '@constants/styleConst';

const ScrollProgressBar = ({ scaleX }) => {
  return (
    <motion.div
      style={{
        scaleX,
        position: 'fixed',
        top: `calc(${APP_HEADER_H} - 5px)`,
        left: 0,
        right: 0,
        height: '5px',
        background: `${colors.primary35}`,
        transformOrigin: '0%',
        zIndex: 1000,
      }}
    />
  );
};

export default ScrollProgressBar;
