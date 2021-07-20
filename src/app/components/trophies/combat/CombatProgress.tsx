import { FC } from 'react';
import { ProgressProps } from '../types';
import ProgressSVG from '../ProgressSVG';

const CombatProgress: FC<ProgressProps> = (props) => {
  return (
    <ProgressSVG viewBox="0 0 52 119" fill="none" {...props}>
      <path
        stroke="#FF9330"
        strokeWidth="10"
        d="M6 37.9245L29.1568 6.00006L43.1912 26.717L45.9981 88.1884L20.3853 113.66L6 88.528V37.9245Z"
        fill="#FF9330"
      />
      <path
        d="M16.875 37.9244L29.1551 6L43.1895 26.7169L29.1551 53.2073L22.4888 53.547L16.875 37.9244Z"
        fill="#FFB067"
      />
      <path
        d="M43.1936 26.7192L29.1592 53.2097L31.2643 94.3039L46.0005 88.1907L43.1936 26.7192Z"
        fill="#E68022"
      />
      <path
        d="M11.6138 37.924H6V88.5275L16.8767 60.3389L11.6138 37.924Z"
        fill="#E58022"
      />
      <path
        d="M16.8781 37.924H11.6152L16.8781 60.3389L22.4919 53.5465L16.8781 37.924Z"
        fill="#FFA451"
      />
      <path
        d="M20.3857 104.15V113.999L45.9986 88.1882L31.2624 94.3014L20.3857 104.15Z"
        fill="#DD791C"
      />
    </ProgressSVG>
  );
};

export default CombatProgress;
