import { useState } from "react";
import Logo from "../common/logo/logo";
import NavBar from "../nav-bar/nav-bar";
import ButtonCta from "../common/button/button-cta";
import "./styles.scss";

const TopBar = () => {
  const [isOpen, setOpen] = useState(false);

  const openNav = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="top-bar">
      <Logo />

      <NavBar isOpen={isOpen} />

      <div className="block-btn-nav">
        <button onClick={openNav}>
          <i className="material-icons">menu</i>
        </button>
      </div>

      <ButtonCta />
    </div>
  );
};

export default TopBar;
