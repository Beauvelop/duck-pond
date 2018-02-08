import React, { Component } from 'react';

import { TimelineLite, Power4 } from 'gsap';

/** 
 * This is for animations WITHIN the svg -body parts, etc.
*/
class TestCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birdTime: new TimelineLite({
        onComplete() {
          this.restart();
        }
      })
    };
  }
  componentDidMount() {
    this.state.birdTime
      .to('#bird-head-parts-test', 0.1, { rotation: 30, transformOrigin: '70% 50%', ease: Power4.easeOut }, '2')
      .to('#bird-head-parts-test', 0.1, { rotation: 80, transformOrigin: '60% 50%', ease: Power4.easeOut }, '+=4')
      .to(
        '#bird-head-parts-test',
        0,
        {
          rotation: 60,
          transformOrigin: '60% 50%',
          css: { scaleY: -1 },
          ease: Power4.easeOut
        },
        '+=3'
      )
      .to(
        '#bird-head-parts-test',
        0,
        {
          css: { scaleY: -1, rotation: 180 },
          transformOrigin: '60% 50%'
        },
        '+=2'
      )
      .to(
        '#tail-torso-test',
        0,
        {
          css: {
            rotation: 10,
            scaleX: -1,
            transformOrigin: '10% 50%'
          },
          ease: Power4.easeOut
        },
        '+=0'
      )
      .to(
        '#bird-head-parts-test',
        0,
        {
          css: { scaleY: -1, rotation: 180 },
          transformOrigin: '60% 50%'
        },
        '+=2'
      )
      .to(
        '#bird-head-parts-test',
        0,
        {
          css: { scaleY: 1, rotation: 40 },
          transformOrigin: '60% 50%'
        },
        '+=2'
      )
      .to(
        '#bird-head-parts-test',
        0,
        {
          css: { scaleX: -1, rotation: 10 },
          transformOrigin: '60% 50%'
        },
        '+=1'
      )
      .to(
        '#bird-head-parts-test',
        0,
        {
          css: { scaleY: 1, rotation: -20 },
          transformOrigin: '60% 50%'
        },
        '+=1'
      )
      .to(
        '#tail-torso-test',
        0,
        {
          css: {
            rotation: 10,
            scaleX: 1,
            transformOrigin: '10% 50%'
          },
          ease: Power4.easeOut
        },
        '+=3'
      )
      .to(
        '#bird-head-parts-test',
        0,
        {
          css: { scaleX: 1, rotation: 10 },
          transformOrigin: '60% 50%'
        },
        '+=0'
      );
  }
  render() {
    return (
      <svg id="bird-svg-test" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path id="bird-bg-test" strokeWidth="0" stroke="black" fill="fuchsia" d="M0 0h100v100H0z" opacity="0" />

        <g id="tail-torso-test">
          <path
            id="bird-tail-test"
            fill="none"
            stroke="gray"
            strokeMiterlimit="10"
            strokeWidth="4.6737"
            d="M45.5 29.6L71 39.3m-3.4 5.8L43.3 32.9"
          />

          <path
            id="leg-right-test"
            fill="none"
            stroke="#666"
            strokeMiterlimit="10"
            strokeWidth=".7403"
            d="M42 50.1L36.4 65"
          />
          <path
            id="leg-left-test"
            fill="none"
            stroke="#666"
            strokeMiterlimit="10"
            strokeWidth=".7403"
            d="M52.9 45.7l2.4 13.9"
          />

          <g id="bird-torso-test">
            <radialGradient
              id="bird-body-test"
              cx="-11.7734"
              cy="-492.2026"
              r="17.4104"
              gradientTransform="matrix(.8655 -.3491 .3224 .9371 210.9609 492.6147)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fc0" />
              <stop offset=".01834524" stopColor="#f7c705" />
              <stop offset=".1147" stopColor="#d0ad1f" />
              <stop offset=".2182" stopColor="#af9735" />
              <stop offset=".3288" stopColor="#958547" />
              <stop offset=".4489" stopColor="#807755" />
              <stop offset=".5836" stopColor="#716d5f" />
              <stop offset=".7444" stopColor="#696864" />
              <stop offset="1" stopColor="#666" />
            </radialGradient>
            <path
              fill="url(#bird-body-test)"
              d="M35.7 49.1c-8.8-4.8-13-14.8-9.5-22.4 3.5-7.5 13.5-9.8 22.3-5 8.8 4.8 13 14.8 9.5 22.4-3.5 7.6-13.5 9.8-22.3 5z"
            />
            <linearGradient
              id="bird-breast-test"
              x1="-12.1421"
              x2="-12.1421"
              y1="-476.4438"
              y2="-500.6338"
              gradientTransform="rotate(-20.43 1478.8435867 -375.9872197)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#7a7359" />
              <stop offset=".2679" stopColor="#7d7557" />
              <stop offset=".4364" stopColor="#857a52" />
              <stop offset=".5775" stopColor="#948448" />
              <stop offset=".7034" stopColor="#a9923a" />
              <stop offset=".8193" stopColor="#c3a428" />
              <stop offset=".9263" stopColor="#e4ba12" />
              <stop offset="1" stopColor="#fc0" />
            </linearGradient>
            <path
              fill="url(#bird-breast-test)"
              d="M41.8 26.6c-4.7 2.4-8.6 4.9-11.8 6.6-.9.5-4.5.1-4.2 1.9.6 2.7 4.9 8.8 8.9 12 3.4 2.7 7.6 4 11.8 3.2 3.6-.7 7.5-3 9.4-6.5 1.8-3.2 1.6-6.5-.6-9.4C52.8 31 47.6 28 43.9 27c-.6-.2-1.2-.5-1.7-.8-.5.1-.8.4-1.1.8"
            />
          </g>
        </g>
        <g id="bird-head-parts-test">
          <path id="beak-test" fill="#444" d="M25 28l-6.9 1.4 5.8-3.9z" />
          <path
            id="bird-face-test"
            fill="#E6E6E6"
            d="M22.2 26.6c-1.3-3.8 1.7-8.5 6.7-10.6 5-2 10.2-.6 11.5 3.2 1.3 3.8-1.7 8.5-6.7 10.6-5.1 2-10.2.6-11.5-3.2z"
          />
          <path
            id="bird-mask-test"
            fill="gray"
            d="M21.5 24.9s.2-.3.6-.7c.4-.4.9-.9 1.7-1.4.7-.5 1.6-1 2.6-1.4 1-.5 2.1-.9 3.2-1.4 1.1-.5 2.2-.9 3.2-1.2 1-.4 2-.7 2.9-.9 1.7-.5 2.9-.8 2.9-.8l.4.8s-.9.8-2.3 1.9c-.7.5-1.6 1.1-2.5 1.7-.9.6-1.9 1.2-2.9 1.8-1 .6-2 1.2-3 1.7-1 .6-1.9 1-2.7 1.3-.8.3-1.6.4-2.1.5h-.9l-1.1-1.9z"
          />
          <path
            id="bird-head-test"
            d="M27.4 22.6c.2.7-.1 1.5-.8 1.8-.7.3-1.4-.1-1.7-.8-.3-.7.1-1.5.8-1.8.7-.3 1.4.1 1.7.8z"
          />
        </g>
        <g id="bird-wings-test">
          <linearGradient
            id="wing-1-test"
            x1="152.3594"
            x2="243.4141"
            y1="-577.2168"
            y2="-577.2168"
            gradientTransform="matrix(1.0486 -.5062 .4389 1.0751 93.3818 772.2944)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fc0" stopOpacity="0" />
            <stop offset=".4554" stopColor="#fc0" />
            <stop offset="1" stopColor="#fc0" stopOpacity=".5" />
            <stop offset="1" stopColor="#fc0" />
          </linearGradient>
          <path fill="url(#wing-1-test)" d="M95.1 28.1L57.6 81.7 0 75.1l37.4-53.6z" />
          <linearGradient
            id="wing-2-test"
            x1="154.5293"
            x2="245.5859"
            y1="-571.2749"
            y2="-571.2749"
            gradientTransform="matrix(1.0486 -.5062 .4389 1.0751 93.3818 772.2944)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fc0" stopOpacity="0" />
            <stop offset=".4554" stopColor="#444" />
            <stop offset=".5727" stopColor="#726533" stopOpacity=".8923" />
            <stop offset=".779" stopColor="#bd9c18" stopOpacity=".7029" />
            <stop offset=".9266" stopColor="#edbf07" stopOpacity=".5674" />
            <stop offset="1" stopColor="#fc0" stopOpacity=".5" />
            <stop offset="1" stopColor="#fc0" />
          </linearGradient>
          <path fill="url(#wing-2-test)" d="M100 33.4L62.5 87 4.8 80.3l37.5-53.6z" />
        </g>
      </svg>
    );
  }
}
export default TestCircle;

/*


*/
