import React from 'react';
// import WaterForeground from './WaterForeground';

const WaterForeground = () => (
  <svg viewBox="0 0 1920 1080">
    <linearGradient id="water-grad" x1="961" x2="961" y1="1077.001" y2="873.0005" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#cfcfcf" stopOpacity="0" />
      <stop offset="1" stopColor="var(--sharedGradColor)" />
    </linearGradient>
    <path fill="url(#water-grad)" d="M2 873h1918v204H2z" />
  </svg>
);

export default WaterForeground;
