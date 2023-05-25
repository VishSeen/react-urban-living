import config from "./data/config.json";
import "./styles.scss";
import { useOnScreen } from "../../hooks/use-on-screen/use-on-screen";
import { useEffect, useRef } from "react";

const NavBar = ({ isOpen }) => {
  let transDelay = 0;
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    elementRef.current.querySelectorAll("a").forEach((element) => {
      isOnScreen
        ? element.classList.add("animate")
        : element.classList.remove("animate");
    });
  }, [isOnScreen]);

  return (
    <div className={`nav-bar ${isOpen ? "active" : ""}`}>
      <div className="nav-content">
        <ul className="menu-container" ref={elementRef}>
          {config.links.map((item, pos) => (
            <li className="menu-item" key={pos}>
              <a
                style={{
                  transitionDelay: `${(transDelay = transDelay + 0.2)}s`,
                }}
                href="{item.href}"
              >
                <span>0{pos + 1}</span>

                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-footer">
        <div className="address"></div>
      </div>
    </div>
  );
};

export default NavBar;
