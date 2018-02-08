import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: peru;
  font-weight: lighter;
  font-size: 20px;
`

const Landing = () => (
  <div className="landing">
    <StyledTitle>This Works</StyledTitle>
    <input type="text" placeholder="Search" />
    <Link to="/search">Or Browse Anything at all</Link>
  </div>
);

export default Landing;