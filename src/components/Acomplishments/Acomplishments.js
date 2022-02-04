import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 6, text: "Years of coding & Web Design" },
  {
    number: 3,
    text: "Years of Freelancing as Graphics and Web designer/developer",
  },
  { number: 2, text: "Years of Fullstack" },
  {
    number: 17,
    text: "Years as a Single-father to my son",
  },
  {
    number: 2007,
    text: "Represented my country to play against the Australian Kangaroos in a rugby League international test match and got signed a one year contract with the Australian Canberra Raiders-feeder club the following year.",
  },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
