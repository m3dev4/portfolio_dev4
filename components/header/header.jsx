"use client";
import React, { useState } from "react";
import Burger from "../burger";
import Stairs from "../stairs";
import Menu from "../menu"
import { AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <Burger
        openMenu={() => {
          setMenuIsOpen(true);
        }}
      />
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <>
            <Stairs />
            <Menu
              closeMenu={() => {
                setMenuIsOpen(false);
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
