import { useRef, useEffect } from "react";
import { useOnScreen } from "../../../hooks/use-on-screen/use-on-screen";
import "./styles.scss";

const Logo = () => {
  const logoRef = useRef(null);
  const isOnScreen = useOnScreen(logoRef);

  useEffect(() => {
    if (isOnScreen) {
      logoRef.current.classList.add("animate");
    }
  }, [isOnScreen]);

  return (
    <div ref={logoRef} className="block-logo" title="Logo">
      <a href="#">urban living</a>
    </div>
  );
};

export default Logo;
