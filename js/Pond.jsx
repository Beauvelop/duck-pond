import React from 'react';

const Pond = () => (
  <svg className="pond" viewBox="0 0 1920 1080">
    <linearGradient id="water-grad" x1="961" x2="961" y1="1077.001" y2="873.0005" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#cfcfcf" stopOpacity="0" />
      <stop offset="1" stopColor="#a8a8a8" />
    </linearGradient>
    <path fill="url(#water-grad)" d="M2 873h1918v204H2z" />
  </svg>
);

export default Pond;

/*

<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
  <path fill="none" stroke="gray" stroke-miterlimit="10" stroke-width="4.5972" d="M33.4 528.7l26.1 9.2m-3.5 5.5l-24.8-11.5"/>
  <path fill="none" stroke="#666" stroke-miterlimit="10" stroke-width=".7282" d="M29.9 548.1l-5.8 14.1"/>
  <path fill="#D9E021" d="M42.4 548.7l.3 8.3"/>
  <path fill="none" stroke="#666" stroke-miterlimit="10" stroke-width=".7282" d="M41 543.9l2.5 13.2"/>
  <radialGradient id="a" cx="30.4414" cy="532.957" r="16.4579" gradientTransform="rotate(-20.43 33.92704734 535.0281045)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fc0"/>
    <stop offset=".01834524" stop-color="#f7c705"/>
    <stop offset=".1147" stop-color="#d0ad1f"/>
    <stop offset=".2182" stop-color="#af9735"/>
    <stop offset=".3288" stop-color="#958547"/>
    <stop offset=".4489" stop-color="#807755"/>
    <stop offset=".5836" stop-color="#716d5f"/>
    <stop offset=".7444" stop-color="#696864"/>
    <stop offset="1" stop-color="#666"/>
  </radialGradient>
  <path fill="url(#a)" d="M23.4 547.2c-9-4.5-13.4-14-9.7-21.1 3.6-7.1 13.8-9.2 22.8-4.7 9 4.5 13.4 14 9.8 21.1-3.7 7.2-13.9 9.3-22.9 4.7z"/>
  <linearGradient id="b" x1="29.457" x2="29.457" y1="547.8252" y2="524.7686" gradientTransform="rotate(-20.43 33.92704734 535.0281045)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#7a7359"/>
    <stop offset=".2679" stop-color="#7d7557"/>
    <stop offset=".4364" stop-color="#857a52"/>
    <stop offset=".5775" stop-color="#948448"/>
    <stop offset=".7034" stop-color="#a9923a"/>
    <stop offset=".8193" stop-color="#c3a428"/>
    <stop offset=".9263" stop-color="#e4ba12"/>
    <stop offset="1" stop-color="#fc0"/>
  </linearGradient>
  <path fill="url(#b)" d="M29.6 525.9c-4.8 2.2-8.8 4.7-12.1 6.2-1 .5-4.6.1-4.3 1.8.6 2.5 5 8.3 9.1 11.3 3.5 2.6 7.8 3.8 12.1 3 3.7-.7 7.6-2.9 9.7-6.2 1.8-3 1.6-6.2-.6-8.9-2.5-3.1-7.9-6-11.7-6.9-.6-.1-1.2-.5-1.8-.7-.5.1-.8.4-1.1.7"/>
  <path fill="#444" d="M12.4 527.2l-7 1.4 6-3.8z"/>
  <ellipse cx="18.9" cy="522.4" fill="#E6E6E6" rx="9.9" ry="7" transform="rotate(159.57 18.86151015 522.41497764)"/>
  <path fill="gray" d="M8.9 524.3s.2-.3.6-.7c.4-.4 1-.9 1.7-1.4.8-.5 1.7-.9 2.7-1.3 1-.4 2.1-.9 3.2-1.3l3.3-1.2c1.1-.3 2.1-.6 2.9-.9 1.7-.5 2.9-.7 2.9-.7l.3.8s-.9.8-2.4 1.8c-.7.5-1.6 1.1-2.6 1.7l-3 1.8c-1 .6-2.1 1.1-3.1 1.6s-1.9.9-2.8 1.2c-.9.3-1.6.4-2.2.4h-.9l-.6-1.8z"/>
  <circle cx="13.6" cy="522.6" r="1.3"/>
  <linearGradient id="c" x1="-17.1934" x2="74.8066" y1="550.3169" y2="550.3169" gradientTransform="matrix(1.0486 -.5062 .4389 1.0751 -236.2666 -27.5593)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fc0" stop-opacity="0"/>
    <stop offset=".4554" stop-color="#fc0"/>
    <stop offset="1" stop-color="#fc0" stop-opacity=".5"/>
    <stop offset="1" stop-color="#fc0"/>
  </linearGradient>
  <path fill="url(#c)" d="M84.2 527.3L45.9 578l-59.1-6.3L25.1 521z"/>
  <linearGradient id="d" x1="-14.8359" x2="77.1631" y1="556.0771" y2="556.0771" gradientTransform="matrix(1.0486 -.5062 .4389 1.0751 -236.2666 -27.5593)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fc0" stop-opacity="0"/>
    <stop offset=".4554" stop-color="#444"/>
    <stop offset=".5727" stop-color="#726533" stop-opacity=".8923"/>
    <stop offset=".779" stop-color="#bd9c18" stop-opacity=".7029"/>
    <stop offset=".9266" stop-color="#edbf07" stop-opacity=".5674"/>
    <stop offset="1" stop-color="#fc0" stop-opacity=".5"/>
    <stop offset="1" stop-color="#fc0"/>
  </linearGradient>
  <path fill="url(#d)" d="M89.2 532.3L50.9 583l-59.1-6.3L30.1 526z"/>
</svg>

*/
