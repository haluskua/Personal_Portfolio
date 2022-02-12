import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
// import { DiCssdeck } from "react-icons/di";
import CircleLogo from "../CircleLogo/CircleLogo";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <motion.div
        whileHover={{
          position: "relative",
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link href="/">
          <a
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              color: "white",
              marginBottom: "20px",
            }}
          >
            <CircleLogo /> <Span>Portfolio</Span>
          </a>
        </Link>
      </motion.div>
    </Div1>
    <Div2>
      <motion.div
        whileHover={{
          position: "relative",
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link href="#projects">
          <NavLink> Projects</NavLink>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{
          position: "relative",
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link href="#tech">
          <NavLink> Technologies</NavLink>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{
          position: "relative",
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
      >
        <Link href="#about">
          <NavLink> About</NavLink>
        </Link>
      </motion.div>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
