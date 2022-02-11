import React from "react";
import styled, { keyframes } from "styled-components";

import SuperQuery from "@themgoncalves/super-query";
import { device } from "../MediaQuery";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  WordWrap: {
    height: "auto",
    width: "100%",
    padding: "1px",
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "0.41rem",

    "& span": {
      color: "orange",
      background: "linear-gradient(-9.97deg, #c9af89 21.84%, #a786d9 84.67%)",
      textTransform: "uppercase",
      border: "1px solid #00dbd8",
      fontSize: "5px",
    },
  },
  letters: {
    color: "orange",
    border: " 2px solid orange",
  },
});

export default function NameAnimation() {
  const reactArray = "1111-111 101   1".split("");
  const classes = useStyles();

  return (
    <React.Fragment>
      <Wrapper>
        <Box component="div" className={classes.WordWrap}>
          {reactArray.map((item, index) => (
            <span className={classes.letters} key={index}>
              {item}
            </span>
          ))}
        </Box>
      </Wrapper>
    </React.Fragment>
  );
}

const animation = keyframes`
0% {
    opacity: 0; 
    transform: translateY(-1px) skewY(5deg) skewX(6deg) rotateZ(2deg);
    filter: blur(1px);
    } 
20% {   
     opacity: 1; 
     transform: translateY(-1.3px) skewY(0deg) skewX(0deg) rotateZ(1deg);
     filter: blur(0px) }

65% { 
     opacity: 1; 
     transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
     filter: blur(.21px) }

97% { 
      opacity: 0.841;     
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(.1px) }

100% { 
      opacity: 0; 
      transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg);
      filter: blur(1px) 
      }
`;

const Wrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0;
  width: 100%;
  font-weight: 900;

  @media ${device.mobileS} and (orientation: portrait) {
    padding: 9px;
  }
  @media ${device.mobileS} and (orientation: landscape) {
    padding: 13px;
  }

  @media ${device.mobileM} and (orientation: portrait) {
    font-size: 1.43rem;
    padding: 15px;
    line-height: 1.72em;
  }

  ${SuperQuery().minWidth.lg.and.landscape.css`
    // margin-left: -0.5rem;
    width: 70%;
    
  `};

  @media ${device.tablet} and (orientation: landscape) {
    font-size: 1.33rem;
    font-weight: 900;
    line-height: 25px;
  }

  @media ${device.laptop} and (orientation: landscape) {
    padding: 10px;
    line-height: 30px;
  }

  span {
    display: inline-block;
    font-size: 24px;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 0.15s;
  }
  span:nth-child(2) {
    animation-delay: 0.3s;
  }
  span:nth-child(3) {
    animation-delay: 0.45s;
  }
  span:nth-child(4) {
    animation-delay: 0.6s;
  }
  span:nth-child(5) {
    font-size: 0.01px;
    animation-delay: 1.15s;
  }
  span:nth-child(6) {
    animation-delay: 1.3s;
    color: #5f9ea000;
  }
  span:nth-child(7) {
    animation-delay: 1.45s;
  }
  span:nth-child(8) {
    animation-delay: 2s;
  }
  span:nth-child(9) {
    animation-delay: 2.15s;
  }
  span:nth-child(10) {
    animation-delay: 2.3s;
  }
  span:nth-child(11) {
    animation-delay: 2.45s;
  }
  span:nth-child(12) {
    animation-delay: 2.9s;
  }
  span:nth-child(13) {
    animation-delay: 3.14s;
  }
  span:nth-child(14) {
    animation-delay: 3.29s;
  }
  span:nth-child(15) {
    animation-delay: 3.5s;
  }
`;
