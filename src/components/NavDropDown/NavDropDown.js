import styled from "styled-components";

export const Hamburger = styled.div`
  background-color: "green";
  padding: 2rem;
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1/ 2 / 6;
    align-items: center;
    justify-content: center;
  }
  li {
    width: 100%;
  }
`;

export const Span = styled.span`
  font-size: 2.3rem;
  font-weight: bold;
  color: #00dbd8;
  background: linear-gradient(89.97deg, #00dbd8 1.84%, #91cbff 54.67%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  transition: 0.4s ease;
  color: black;
  width: 100%;
  &:hover {
    color: purple;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;
