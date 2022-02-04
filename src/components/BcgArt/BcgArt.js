import React from "react";
import { Img, Caption, BcgArtSection } from "./BcgArtStyles";
import { Section } from "../../styles/GlobalComponents/";
import { bopImgs } from "./bcgConstant";

const BcgArt = () => (
  <Section nopadding id="projects">
    {bopImgs.map(({ image, description, id }) => (
      <BcgArtSection key={id}>
        <Img src={image}></Img>
        <Caption>{description}</Caption>
      </BcgArtSection>
    ))}
  </Section>
);

export default BcgArt;
