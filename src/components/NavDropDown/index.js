import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Span, NavLink } from "./NavDropDown";

import Link from "next/link";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Span>
          <motion.div
            whileHover={{
              position: "relative",
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <MenuIcon
              style={{
                fontSize: "2.7rem",
              }}
            />
          </motion.div>
        </Span>
      </Button>
      <Menu
        style={{ backgroundColor: "rgb(45 39 82 / 65%)" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} style={{ backgroundColor: "#c0b3df" }}>
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
        </MenuItem>
        <MenuItem onClick={handleClose}>
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
        </MenuItem>
        <MenuItem onClick={handleClose}>
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
        </MenuItem>
      </Menu>
    </div>
  );
}
