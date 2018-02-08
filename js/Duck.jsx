import React, { Component } from 'react';
import { Power1, TimelineLite, Circ } from 'gsap';

class Duck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: new TimelineLite()
    };
  }

  componentDidMount() {
    this.state.timeline
      .fromTo('.duck-svg', 140, { x: 500, repeat: -1, ease: Circ.easeOut }, { x: -700 })
      .from('.ripple-1', 2.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.0')
      .from('.ripple-2', 2.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.3')
      .from('.ripple-3', 2.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.6')
      .from('.ripple-4', 2.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '5.9')
      .from('.ripple-5', 2.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '6.2')
      .from('.ripple-6', 2.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '6.5')
      .from('.ripple-7', 2.5, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '6.8')
      .from('.wake-1', 6, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '2.1')
      .from('.wake-2', 6, { autoAlpha: 0, repeat: -1, ease: Power1.easeInOut, yoyo: true }, '-=6');
  }
  render() {
    return (
      <svg className="duck-svg" viewBox="0 0 809 120">

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
            stroke="#4D4D4D"
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

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 809 120">
  <g fill="none" stroke-miterlimit="10">
    <ellipse cx="80.5" cy="41" stroke="#000" stroke-width="2.8528" rx="61.2" ry="4"/>
    <ellipse cx="90.9" cy="41" stroke="#1A1A1A" stroke-width="2.4053" rx="68.3" ry="5.7"/>
    <ellipse cx="106.7" cy="41" stroke="#333" stroke-width="1.483" rx="84" ry="8"/>
    <ellipse cx="121.8" cy="41" stroke="#4D4D4D" stroke-width="1.8106" rx="98.9" ry="10.1"/>
    <ellipse cx="147.9" cy="41" stroke="#666" stroke-width="1.0665" rx="124.7" ry="10"/>
    <ellipse cx="186.4" cy="41" stroke="gray" stroke-width="1.3175" rx="163" ry="11.7"/>
    <ellipse cx="325.3" cy="41" stroke="#999" stroke-width="1.7514" rx="301.3" ry="11.2"/>
  </g>
  <path fill="none" stroke="gray" stroke-miterlimit="10" stroke-width=".7595" d="M40.2 33.2C145.3 22.3 217.8 9.6 426.4 7.3 548.9 5.9 745.6 11 804.1 1.1"/>
  <path fill="none" stroke="#333" stroke-miterlimit="10" stroke-width=".5918" d="M41.8 46.8c103.8 10.5 175 24.5 380.4 31.5 120.6 4.1 327-2.7 384.8 6"/>
  <path fill="#0F0D0B" d="M125.4 31.1c-.1.1 0 .1 0 0-.4.2-.8.4-1.1.3-.4-.2-.8-.4-1.2-.5h.1c1.5-1.2 3-2.8 3.3-4.7-2.9 1.5-6.7 1.9-9.8 3.2-3.3.8-6.8-.8-10-1.5-4.7-1-9.4-1.9-14.2-2.4-6.8-.7-14.8-1.8-21.6-.7-3.6 0-7.5.8-10.9 1.9-1.4.2-2.7.4-3.9 1-3.7.8-6.9 2.4-10 4.4-.8.5-1.7.8-2.6.8-4.5 1.7-.2-8.2.1-9.6.8-3.7.6-7.8-1.9-10.9-5-6.3-14.6-5-19.4.8-3.3 9.6-15 12.3-20 20.4 6.6 0 18.7-15 24.9-7.7.6.3 1.1.7 1.5 1.2 1.5 2.9-.9 6.4-1.8 9.3-1.2 2.5-1.7 4.7-1.6 6.7 23.8-.3 76.7-.3 95.2.1.3-.3.6-.5.9-.8 2.3-3.2 5.7-5.4 8-8.5 1-2.4 1.8-4.9 2.6-7.4-1.9 2-4.2 3.5-6.6 4.6z"/>
  
  
</svg>


// DISCARDS

        <linearGradient
          id="reflection-grad"
          x1="1169.9648"
          x2="1169.9648"
          y1="947"
          y2="1022.9995"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopOpacity="0" />
          <stop offset="0.2" stopOpacity=".4" />

          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <path
          fill="url(#reflection-grad)"
          d="M1226 978.8c.4-.4.8-.7 1.2-1.1.3-.1.6.2 1 .6 2.2 2.3 4.1 5.2 5.7 9-.3-4.8-.6-9.7-1-14.4-1.7-6.1-4.6-10.3-6.2-16.5-1.2-3-2.6-5.8-4-8.3-3.8 0-74.4-.9-90.4-1.2 0 .8-.1 1.6 0 2.4-1.5 5-2 11.1-1 18.6.2 5.6 1.9 12.4-.2 18.1-.5 1-1.1 1.8-1.8 2.4-7.7 14.2-16.6-14.9-23.2-14.9 3.2 15.8 14.3 21.1 15.6 39.7 3.5 11.3 12.7 13.9 19.1 1.6 3.2-6.2 4.2-14 4.2-21.3 0-2.7-2.2-21.9 2-18.6.9 0 1.7.6 2.4 1.6 2.7 3.8 5.5 7.1 9 8.5 1.1 1.2 2.4 1.5 3.7 1.9 3.2 2.1 6.9 3.8 10.5 3.7 6.5 2.2 14.7 0 21.6-1.3 4.9-1 9.8-2.6 14.7-4.6 3.3-1.3 7.2-4.5 10.3-3 2.9 2.6 6.5 3.3 9.1 6.2.1-3.7-1-6.7-2.3-9.1z"
        />

--------------

<linearGradient id="a" x1="63.9648" x2="63.9648" y1="37.9043" y2="118" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-opacity=".5"/>
    <stop offset=".06747389" stop-opacity=".4663"/>
    <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <path fill="url(#a)" d="M120 71.5c.4-.4.8-.8 1.2-1.1.3-.1.6.3 1 .6 2.2 2.4 4.1 5.5 5.7 9.4-.3-5.1-.6-10.2-1-15.2-1.7-6.4-4.6-10.9-6.2-17.4-1.2-3.2-2.6-6.1-4-8.7-3.8 0-74.4-1-90.4-1.2 0 .9-.1 1.7 0 2.5-1.5 5.3-2 11.7-1 19.7.2 5.9 1.9 13.1-.2 19.1-.5 1.1-1.1 1.9-1.8 2.5C15.5 96.6 6.6 66 0 66c3.2 16.6 14.3 22.2 15.6 41.8 3.5 11.9 12.7 14.6 19.1 1.6 3.2-6.5 4.2-14.7 4.2-22.4 0-2.8-2.2-23.1 2-19.6.9.1 1.7.6 2.4 1.7 2.7 4 5.5 7.4 9 9 1.1 1.2 2.4 1.6 3.7 2 3.2 2.2 6.9 4 10.5 3.9 6.5 2.3 14.7.1 21.6-1.4 4.9-1 9.8-2.7 14.7-4.8 3.3-1.4 7.2-4.8 10.3-3.1 2.9 2.7 6.5 3.5 9.1 6.6.2-4.2-.9-7.3-2.2-9.8z"/>
  
*/
