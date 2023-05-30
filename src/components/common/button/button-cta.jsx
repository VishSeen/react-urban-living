import "./styles.scss";
import "../../../assets/scss/animations.scss";
import { useRef } from "react";
import { useOnScreen } from "../../../hooks/use-on-screen/use-on-screen";

const ButtonCta = () => {
  const btnRef = useRef(null);
  const isOnScreen = useOnScreen(btnRef);

  if (isOnScreen) {
    btnRef.current.querySelectorAll("a").forEach((element) => {
      element.classList.add("animate");
    });
  }

  return (
    <div ref={btnRef} className="block-cta">
      <a className="btn-cta">Contact</a>
    </div>
  );
};

export default ButtonCta;
