import React from "react";

import {
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  HeaderFour,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
  BlogCard,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit, year }) => (
          <BlogCard key={id}>
            <Img src={image}></Img>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <HeaderFour title>{year}</HeaderFour>
            </TitleContent>
            <Hr />
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>
                <TagList>
                  <HeaderFour title>STACK</HeaderFour>
                  {tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagList>
                <UtilityList>
                  <ExternalLinks
                    href={visit}
                    target="_blank"
                    rel=" noopener noreferrer"
                  >
                    Code
                  </ExternalLinks>
                  <ExternalLinks
                    href={source}
                    target="_blank"
                    noopener="noreferrer"
                  >
                    Source
                  </ExternalLinks>
                </UtilityList>
              </TitleContent>
            </div>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
