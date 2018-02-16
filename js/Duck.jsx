import React, { Component } from 'react';
import { Power1, TimelineLite, Circ } from 'gsap';
// import { TimelineLite, Circ } from 'gsap';

class Duck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: new TimelineLite()
    };
  }

  componentDidMount() {
    this.state.timeline.fromTo('#duck-svg', 200, { x: 400, ease: Circ.easeOut }, { x: -700 });
    const rippleTime = new TimelineLite({ repeat: -1 });
    rippleTime
      .from('.ripple-1', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '3')
      .from('.ripple-2', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1')
      .from('.ripple-3', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1')
      .from('.ripple-4', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1')
      .from('.ripple-5', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1')
      .from('.ripple-6', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1')
      .from('.ripple-7', 1.8, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=1')
      .from('.wake-1', 5, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '+=0')
      .from('.wake-2', 5, { autoAlpha: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1, repeatDelay: 2 }, '-=5');
  }
  render() {
    return (
      <svg id="duck-svg" viewBox="0 0 809 120">

        <linearGradient
          id="reflection-grad"
          x1="63.9648"
          x2="63.9648"
          y1="37.9043"
          y2="118"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity=".5" />
          <stop offset=".06747389" stopOpacity=".4663" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <path
          fill="url(#reflection-grad)"
          d="M120 71.5c.4-.4.8-.8 1.2-1.1.3-.1.6.3 1 .6 2.2 2.4 4.1 5.5 5.7 9.4-.3-5.1-.6-10.2-1-15.2-1.7-6.4-4.6-10.9-6.2-17.4-1.2-3.2-2.6-6.1-4-8.7-3.8 0-74.4-1-90.4-1.2 0 .9-.1 1.7 0 2.5-1.5 5.3-2 11.7-1 19.7.2 5.9 1.9 13.1-.2 19.1-.5 1.1-1.1 1.9-1.8 2.5C15.5 96.6 6.6 66 0 66c3.2 16.6 14.3 22.2 15.6 41.8 3.5 11.9 12.7 14.6 19.1 1.6 3.2-6.5 4.2-14.7 4.2-22.4 0-2.8-2.2-23.1 2-19.6.9.1 1.7.6 2.4 1.7 2.7 4 5.5 7.4 9 9 1.1 1.2 2.4 1.6 3.7 2 3.2 2.2 6.9 4 10.5 3.9 6.5 2.3 14.7.1 21.6-1.4 4.9-1 9.8-2.7 14.7-4.8 3.3-1.4 7.2-4.8 10.3-3.1 2.9 2.7 6.5 3.5 9.1 6.6.2-4.2-.9-7.3-2.2-9.8z"
        />

        <g className="ripple-wake-collection" fill="none" stroke="#333" strokeMiterlimit="10">
          <ellipse className="ripple ripple-1" cx="80.5" cy="41" stroke="#000" strokeWidth="2.8528" rx="61.2" ry="4" />
          <ellipse
            className="ripple ripple-2"
            cx="90.9"
            cy="41"
            stroke="#1A1A1A"
            strokeWidth="2.4053"
            rx="68.3"
            ry="5.7"
          />
          <ellipse className="ripple ripple-3" cx="106.7" cy="41" stroke="#333" strokeWidth="1.483" rx="84" ry="8" />
          <ellipse
            className="ripple ripple-4"
            cx="121.8"
            cy="41"
            stroke="var(--darkMist)"
            strokeWidth="1.8106"
            rx="98.9"
            ry="10.1"
          />
          <ellipse
            className="ripple ripple-5"
            cx="147.9"
            cy="41"
            stroke="#666"
            strokeWidth="1.0665"
            rx="124.7"
            ry="10"
          />
          <ellipse
            className="ripple ripple-6"
            cx="186.4"
            cy="41"
            stroke="gray"
            strokeWidth="1.3175"
            rx="163"
            ry="11.7"
          />
          <ellipse
            className="ripple ripple-7"
            cx="325.3"
            cy="41"
            stroke="#999"
            strokeWidth="1.7514"
            rx="301.3"
            ry="11.2"
          />

          <path
            className="wake wake-1"
            fill="none"
            stroke="gray"
            strokeMiterlimit="10"
            strokeWidth=".7595"
            d="M40.2 33.2C145.3 22.3 217.8 9.6 426.4 7.3 548.9 5.9 745.6 11 804.1 1.1"
          />
          <path
            className="wake wake-2"
            fill="none"
            stroke="#333"
            strokeMiterlimit="10"
            strokeWidth=".5918"
            d="M41.8 46.8c103.8 10.5 175 24.5 380.4 31.5 120.6 4.1 327-2.7 384.8 6"
          />
        </g>
        <path
          id="duck-surfaced"
          fill="#0e0c0b"
          d="M125.4 31.1c-.1.1 0 .1 0 0-.4.2-.8.4-1.1.3-.4-.2-.8-.4-1.2-.5h.1c1.5-1.2 3-2.8 3.3-4.7-2.9 1.5-6.7 1.9-9.8 3.2-3.3.8-6.8-.8-10-1.5-4.7-1-9.4-1.9-14.2-2.4-6.8-.7-14.8-1.8-21.6-.7-3.6 0-7.5.8-10.9 1.9-1.4.2-2.7.4-3.9 1-3.7.8-6.9 2.4-10 4.4-.8.5-1.7.8-2.6.8-4.5 1.7-.2-8.2.1-9.6.8-3.7.6-7.8-1.9-10.9-5-6.3-14.6-5-19.4.8-3.3 9.6-15 12.3-20 20.4 6.6 0 18.7-15 24.9-7.7.6.3 1.1.7 1.5 1.2 1.5 2.9-.9 6.4-1.8 9.3-1.2 2.5-1.7 4.7-1.6 6.7 23.8-.3 76.7-.3 95.2.1.3-.3.6-.5.9-.8 2.3-3.2 5.7-5.4 8-8.5 1-2.4 1.8-4.9 2.6-7.4-1.9 2-4.2 3.5-6.6 4.6z"
        />

        <ellipse
          cx="28.5"
          cy="15.2"
          fill="none"
          stroke="#BBBBBC"
          strokeMiterlimit="10"
          strokeWidth="1.0266"
          rx=".5"
          ry=".5"
        />
        <ellipse
          id="duck-eye"
          cx="28.5"
          cy="15.2"
          fill="none"
          stroke="#BBBBBC"
          strokeMiterlimit="10"
          strokeWidth="1.0266"
          rx=".5"
          ry=".5"
        />
      </svg>
    );
  }
}

export default Duck;

/*
RAW

      .to('.ripple-1', 1.5, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '6')
      .to('.ripple-2', 1.5, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '-=1.2')
      .to('.ripple-3', 1.5, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '-=1.2')
      .to('.ripple-4', 1.5, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '-=1.2')
      .to('.ripple-5', 1.5, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '-=1.2')
      .to('.ripple-6', 1.5, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '-=1.2')
      .to('.ripple-7', 1.5, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '-=1.2')


 */
