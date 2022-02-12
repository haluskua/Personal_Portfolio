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
    justifyContent: "flex-start",
    marginBottom: "0.41rem",

    "& span": {
      // background: "linear-gradient(-89.97deg, #a82e13 88.84%, #080002 -4.67%)",
      textTransform: "uppercase",
      // border: "0.51px solid #000",
      letterSpacing: "3.3px",
      lineHeight: "0",
      fontSize: "20px",
    },
  },
});

export default function CircleLogo() {
  const reactArray = "OMZIE'S".split("");
  const classes = useStyles();

  return (
    <React.Fragment>
      <Wrapper>
        <Box component="div" className={classes.WordWrap}>
          {reactArray.map((item, index) => (
            <span key={index}>{item}</span>
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
  width: auto;
  font-weight: 900;

  @media ${device.mobileS} and (orientation: portrait) {
    padding: 4px 0 0 0;
  }
  @media ${device.mobileS} and (orientation: landscape) {
    padding: 1px;
  }

  @media ${device.mobileM} and (orientation: portrait) {
    padding: 0;
  }

  ${SuperQuery().minWidth.lg.and.landscape.css`
    // margin-left: -0.5rem;
    
  `};

  @media ${device.tablet} and (orientation: landscape) {
    font-size: 1.33rem;
    font-weight: 900;
  }

  @media ${device.laptop} and (orientation: landscape) {
    padding: 5px 0;
    line-height: 30px;
  }

  span {
    display: inline-block;
    padding: 10px 0 0 0;
    font-size: 26px;
    width: auto;
    opacity: 0;
    line-height: 5px;
    animation-name: ${animation};
    animation-duration: 8s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.75, 0.82, 0.165, 1);
  }

  span:nth-child(1) {
    animation-delay: 0.15s;
    transform: translateY(-11px) skewY(5deg) skewX(6deg) rotateZ(12deg);
  }
  span:nth-child(2) {
    animation-delay: 0.3s;
  }
  span:nth-child(3) {
    animation-delay: 0.45s;
  }
  span:nth-child(4) {
    animation-delay: 0.6s;
    font-size: 12px;
  }
  span:nth-child(5) {
    animation-delay: 1.15s;
    font-size: 12px;
  }
  span:nth-child(6) {
    animation-delay: 1.4s;
    font-size: 12px;
  }
  span:nth-child(7) {
    font-size: 12px;
    animation-delay: 1.55s;
  }
`;
