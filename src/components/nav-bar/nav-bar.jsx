import config from "./data/config.json";
import "./styles.scss";

const NavBar = ({ isOpen }) => {
  return (
    <div className={`nav-bar ${isOpen ? "active" : ""}`}>
      <ul className="menu-container">
        {config.links.map((item, pos) => (
          <li className="menu-item">
            <a href="{item.href}">
              <span>0{pos + 1}</span>

              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
