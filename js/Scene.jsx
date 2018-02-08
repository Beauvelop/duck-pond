import React from 'react';

// import ForegroundContainer from './ForegroundContainer';
import Tree from './Tree';
import Duck from './Duck';

const Scene = () => (
  <div className="scene-container">
    <svg id="scene-bg-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none">
      <linearGradient id="canvas-grad" x2="1920" y1="540" y2="540" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="var(--sharedGradColor)" />
        <stop offset="1" stopColor="var(--bgGradRight)" />
      </linearGradient>
      <path className="bg-canvas" fill="url(#canvas-grad)" d="M0 0h1920v1080H0z" />
    </svg>
    <Tree />
    <Duck />
  </div>
);

export default Scene;
