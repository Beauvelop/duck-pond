import React, { Component } from 'react';

// import { TweenMax } from 'gsap';

import WaterForeground from './WaterForeground';
import Duck from './Duck';
import Tree from './Tree';

class StyledBgSVG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // duckTimeLine: new TweenMax()
    };
  }

  // componentDidMount() {
  //   this.state.duckTimeLine
  //     .to('.bg-canvas', 5, {opacity: 0, repeat: -1, ease:Power1.easeInOut, yoyo: true})
  // }
  render() {
    return (
      <svg  viewBox="0 0 1920 1080">
        <linearGradient id="canvas-grad" x2="1920" y1="540" y2="540" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--sharedGradColor)" />
          <stop offset="1" stopColor="var(--bgGradRight)" />
        </linearGradient>
        <path className="bg-canvas" fill="url(#canvas-grad)" d="M0 0h1920v1080H0z" />
        <WaterForeground />
        <Tree />
        <Duck/>
      </svg>
    );
  }
}

export default StyledBgSVG;

/*

    const duckMove = new TimelineMax({repeat: 0})
    duckMove
    .fromTo(duckAndRipples, 140, {ease:Circ.easeOut, x:300}, {x: -300});

    */
