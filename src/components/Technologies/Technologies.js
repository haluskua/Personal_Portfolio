import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiFillSliders } from "react-icons/ai";
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
      <ListContainer>
        <ListItem>
          <DiReact size="3rem" color="#d7dfef" />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.Js + Next.js, Javascript, Html, Css & Sass
          </ListParagraph>
        </ListItem>
      </ListContainer>
      <ListContainer>
        <ListItem>
          <DiFirebase size="3rem" color="#d7dfef" />
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node Databases, Express, Serverless, Api
          </ListParagraph>
        </ListItem>
      </ListContainer>
      <ListContainer>
        <ListItem>
          <DiZend size="3rem" color="#d7dfef" />
          <ListTitle>UX/UI</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma & AdobeXD, Photoshop and Illustrator
          </ListParagraph>
        </ListItem>
      </ListContainer>
      <ListContainer>
        <ListItem>
          <AiFillSliders size="3rem" color="#d7dfef" />
          <ListTitle>Abilities</ListTitle>
          <ListParagraph>
            Team Player <br />
            tools like Figma & AdobeXD, Photoshop and Illustrator
          </ListParagraph>
        </ListItem>
      </ListContainer>
    </List>
  </Section>
);

export default Technologies;
