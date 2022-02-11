import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
      </motion.div>
      <SectionText>
        The purpose of this portfolio is to credit my constant pursuit as a
        fullstack developer/UX & UI designer.
      </SectionText>
      <Button onClick={() => (window.location = "https://google.com")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
