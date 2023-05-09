import { useState } from "react";
import Logo from "../common/logo/logo";
import NavBar from "../nav-bar/nav-bar";
import ButtonCta from "../common/button/button-cta";
import "./styles.scss";

const TopBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("menu");

  const openNav = () => {
    if (isOpen) {
      setMenuIcon("menu");
    } else {
      setMenuIcon("close");
    }

    setOpen(!isOpen);
  };

  return (
    <div className="top-bar">
      <Logo />

      <NavBar isOpen={isOpen} />

      <div className="block-btn-nav">
        <button onClick={openNav}>
          <i className="material-icons">{menuIcon}</i>
        </button>
      </div>

      <ButtonCta />
    </div>
  );
};

export default TopBar;
