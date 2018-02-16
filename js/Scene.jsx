import React from 'react';

import Tree from './Tree';
import Pond from './Pond';
import Duck from './Duck';
import Bird from './Bird';

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sceneSound: new Audio('https://www.dropbox.com/s/yiuttz27526uk1q/atmosphere.mp3?raw=1')
    };
  }
  componentDidMount() {
    this.state.sceneSound.play();
    this.state.sceneSound.loop = true;
  }

  render() {
    return (
      <div className="scene-container">

        <svg id="scene-bg-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <linearGradient id="canvas-grad" x2="1920" y1="540" y2="540" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--lightMist)" />
            <stop offset="1" stopColor="var(--bgGradRight)" />
          </linearGradient>
          <path className="bg-canvas" fill="url(#canvas-grad)" d="M0 0h1920v1080H0z" />
        </svg>
        <Pond />
        <Tree />
        <Duck />
        <Bird />
      </div>
    );
  }
}

export default Scene;
/*

*/
