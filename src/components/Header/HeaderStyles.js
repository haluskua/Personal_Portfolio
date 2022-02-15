import { IoIosArrowDropdown } from "react-icons/io";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  padding: 0 2rem;
  width: 1280px;
  z-index: 99;
  margin: 0 auto;
  background: #2d1e4dd9;
  align-items: center;
  align-self: center;
  @media ${(props) => props.theme.breakpoints.xl} {
    grid-area: 1 / 1 / 2 / 3;
    max-width: 1024px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 1220px;
    display: flex;
    align-self: center;
    padding: 0 41rem 0 1rem;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-area: 1 / 1 / 2 / 3;
    padding: 0 17rem 0 5rem;
    width: 900px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
    padding: 0 53rem 0 1rem;
  }
`;
export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
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
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  display: none;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 1/ 2 / 6;
    align-items: center;
    justify-content: center;
  }
  li {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.m} {
    display: none;
  }
`;
export const Div3 = styled.div`
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none !important;
  }
  @media ${(props) => props.theme.breakpoints.m} {
    width: 20%;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? "1" : ".75")};
  transform: ${({ isOpen }) => (isOpen ? "scaleY(-1)" : "scaleY(1)")};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    /* background-color: #212d45; */
    transform: scale(1.2);
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.m} {
    flex-direction: column;
  }
`;
