import styled from "styled-components";

export const BcgArtSection = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  z-index: -1;
  bottom: 4%;
  right: 9%;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  overflow: hidden;
  opacity: 0.35;
`;

export const Caption = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #0c3c46;
  font-size: 1.22rem;
  line-height: 24px;
  text-align: justify;
  z-index: -3;
  margin-left: 12%;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;