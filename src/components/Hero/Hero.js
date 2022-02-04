import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import BcgArt from "../BcgArt/BcgArt";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <BcgArt />
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this Website is to aspire and establish myself as a
        fullstack developer/UX & UI designer.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
