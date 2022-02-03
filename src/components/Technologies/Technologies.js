import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end To Design.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.Js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListContainer>
        <ListItem>
          <DiReact size="3rem" />
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node Databases
          </ListParagraph>
        </ListItem>
      </ListContainer>
      <ListContainer>
        <ListItem>
          <DiZend size="3rem" />
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma & AdobeXD
          </ListParagraph>
        </ListItem>
      </ListContainer>
    </List>
  </Section>
);

export default Technologies;
