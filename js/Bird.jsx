import React, { Component } from 'react';

import { TimelineLite, Power1, Power4 } from 'gsap';

/** 
 * This is for animations WITHIN the svg -body parts, etc.
*/
class Bird extends Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);
    this.state = {
      flyTime: new TimelineLite(),
      alarmSound: new Audio('https://www.dropbox.com/s/q4vsduf0kk7tl3k/alarm.mp3?raw=1'),
      flutterSound: new Audio('https://www.dropbox.com/s/um3n1tqve70dmhd/flutter.mp3?raw=1'),
      birdCallSound: new Audio('https://www.dropbox.com/s/shmyhyjgiu2nyvr/call.mp3?raw=1'),
      perchTime: new TimelineLite({
        onComplete() {
          this.restart();
        }
      })
    };
  }

  componentDidMount() {
    const playFlutter = () => {
      this.state.flutterSound.volume = 0.3;
      this.state.flutterSound.play();
    };
    const playCall = () => {
      this.state.birdCallSound.play();
    };

    this.state.perchTime
      .to('#bird-head-parts-test', 0.2, { rotation: 30, transformOrigin: '70% 50%', ease: Power4.easeOut }, '3')
      .to('#bird-head-parts-test', 0.2, { rotation: 80, transformOrigin: '60% 50%', ease: Power4.easeOut }, '+=1')
      .fromTo('#flutter', 0.1, { autoAlpha: 1 }, { autoAlpha: 0, repeat: 6 }, '0')
      .to(
        '#bird-head-parts-test',
        0,
        {
          transformOrigin: '70% 50%',
          css: { scaleY: -1, rotation: 90 },
          ease: Power4.easeOut
        },
        '+=1'
      )
      .call(playCall, ['Call SOUND'], this, '+=0')
      .to(
        '#bird-head-parts-test',
        1,
        {
          transformOrigin: '70% 50%',
          css: { rotation: 160 },
          ease: Power4.easeOut
        },
        '+=1'
      )
      .call(playFlutter, ['FLUTTER SOUND MID '], this, '-=1')
      .fromTo(
        '#flutter',
        0.1,
        { autoAlpha: 1, ease: Power4.Linear },
        { autoAlpha: 0, ease: Power4.Linear, repeat: 5 },
        '-=1'
      )
      .to(
        '#tail-torso',
        0.2,
        {
          css: {
            rotation: 10,
            scaleX: -1,
            transformOrigin: '50% 50%'
          },
          ease: Power4.easeOut
        },
        '-=1'
      )
      .to(
        '#bird-head-parts-test',
        0.2,
        {
          transformOrigin: '70% 50%',
          css: { scaleY: 1, rotation: 40 },
          ease: Power4.easeOut
        },
        '-=1'
      )
      .to('#bird-head-parts-test', 0.2, { rotation: 0, transformOrigin: '70% 50%', ease: Power4.easeOut }, '+=1')
      .to('#bird-head-parts-test', 0.5, { rotation: 40, transformOrigin: '70% 50%', ease: Power4.easeOut }, '+=2')
      .call(playFlutter, ['FLUTTER SOUND A @0 '], this, '0');
  }
  clickhandler = () => {
    this.state.alarmSound.play();
    this.state.perchTime.pause();
    this.state.flyTime
      .to('#tail-torso', 0.1, { rotation: 0, transformOrigin: '50% 50%', ease: Power4.easeOut }, '0')
      .to('#bird-svg', 0.05, { rotation: 70 })
      .to('#bird-svg', 7, {
        /* flight path */
        bezier: {
          type: 'soft',
          values: [{ x: 100, y: -150 }, { x: 800, y: 500 }, { x: 1800, y: -1000 }],
          autoRotate: false
        },
        ease: Power1.easeOut
      })
      .fromTo('#bird-wings', 0.1, { autoAlpha: 0 }, { autoAlpha: 1, repeat: 50 }, '.1')
      .to('#bird-svg', 4, { scaleX: 0.2, scaleY: 0.4, ease: Power1.easeOut }, '-=7');
  };

  render() {
    return (
      <svg id="bird-svg" onClick={this.clickhandler} viewBox="60 0 100 80" preserveAspectRatio="none">
        <g id="tail-torso">
          <g id="flutter">
            <linearGradient
              id="flutter-grad"
              x1="64.9824"
              x2="178.4746"
              y1="-34.7041"
              y2="-34.7041"
              gradientTransform="matrix(.7428 -.4673 .2347 .8344 20.8838 125.198)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#444" stopOpacity="0" />
              <stop offset=".5" stopColor="#242424" />
              <stop offset="1" stopColor="#444" stopOpacity="0" />
            </linearGradient>
            <path fill="url(#flutter-grad)" d="M147.5 20.6l-43.4 40.2-40.4 14.7 30.7-52.7z" />

          </g>
          <path
            id="bird-tail-test"
            fill="none"
            stroke="#332e26"
            strokeMiterlimit="10"
            strokeWidth="5.2459"
            d="M108.6 35.8l27.6 11.3m-3.7 6.7l-26.3-14.1"
          />
          <path
            id="bird-legs"
            fill="none"
            stroke="#1a1a1a"
            strokeMiterlimit="10"
            strokeWidth=".831"
            d="M104.8 59.6l-6 17.3m17.9-22.4l2.5 16.2"
          />

          <path
            fill="#332e26"
            d="M98 58.5c-9.5-5.6-14.1-17.2-10.3-26 3.8-8.8 14.6-11.4 24.1-5.8 9.5 5.6 14.1 17.2 10.3 26-3.8 8.8-14.6 11.4-24.1 5.8z"
          />
          <linearGradient
            id="chest-grad"
            x1="152.5469"
            x2="152.5469"
            y1="29.8813"
            y2="1.9185"
            gradientTransform="rotate(-20.43 214.30190749 162.44998562)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#a78343" stopOpacity=".6" />
            <stop offset="1" stopColor="#e2cca4" stopOpacity="1" />
          </linearGradient>
          <path
            fill="url(#chest-grad)"
            d="M104.6 32.3C99.5 35 95.3 38 91.8 40c-1 .6-4.8.1-4.5 2.2.7 3.1 5.3 10.2 9.6 13.9 3.7 3.2 8.2 4.7 12.8 3.7 3.9-.9 8.1-3.5 10.2-7.6 1.9-3.7 1.7-7.6-.7-10.9-2.7-3.8-8.3-7.4-12.4-8.5-.6-.2-1.3-.6-1.9-.9-.5.1-.8.5-1.2.9"
          />
          <g id="bird-head-parts-test">
            <path id="bird-beak" fill="#000" d="M86.4 33.9L79 35.6l6.3-4.6z" />
            <path
              id="bird-head"
              fill="#1b1b1b"
              d="M83.4 32.3c-1.4-4.4 1.8-9.9 7.3-12.3 5.4-2.4 11-.7 12.4 3.8 1.4 4.4-1.8 9.9-7.3 12.3-5.4 2.3-11 .6-12.4-3.8z"
            />
            <path
              id="bird-mask"
              fill="#e5e4db"
              d="M82.6 30.4s.2-.3.6-.8c.4-.5 1-1.1 1.8-1.6.8-.6 1.8-1.1 2.9-1.6 1.1-.5 2.3-1.1 3.4-1.6 1.2-.5 2.4-1 3.5-1.4.6-.2 1.1-.4 1.6-.6.5-.2 1-.4 1.5-.5 1.9-.6 3.2-.9 3.2-.9l.4.8s-1 .9-2.5 2.1c-.4.3-.8.6-1.3 1-.5.3-.9.7-1.4 1-1 .7-2.1 1.4-3.2 2.1-1.1.7-2.2 1.4-3.2 2-1 .6-2 1.1-3 1.5-.9.3-1.7.5-2.4.6-.6.1-1 0-1 0l-.9-2.1z"
            />
            <path id="bird-eye" d="M89 27.7c.3.8-.1 1.8-.8 2.1-.7.3-1.5-.1-1.8-1-.3-.8.1-1.8.8-2.1.7-.3 1.5.1 1.8 1z" />
          </g>
          <linearGradient
            id="wings-grad"
            x1="125.5967"
            x2="169.5945"
            y1="77.1357"
            y2="81.5993"
            gradientTransform="matrix(2.2957 -1.3123 1.4329 2.2224 -343.645 67.0742)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#786d58" stopOpacity=".7" />
            <stop offset=".46" stopColor="#786d58" stopOpacity=".8" />
            <stop offset="1" stopColor="#786d58" stopOpacity=".7" />
          </linearGradient>
          <path id="bird-wings" fill="url(#wings-grad)" d="M152.5 6l-36.7 65.1-62.5-1.3 43.3-36.2z" />
        </g>
      </svg>
    );
  }
}
export default Bird;

/*

*/
