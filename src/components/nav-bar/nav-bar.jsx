import config from "./data/config.json";
import "./styles.scss";

const NavBar = ({ isOpen }) => {
  return (
    <div className={`nav-bar ${isOpen ? "active" : ""}`}>
      <div className="menu-top"></div>

      <ul className="menu-container">
        {config.links.map((item, pos) => (
          <li className="menu-item">
            <span>0{pos + 1}</span>
            <a href="{item.href}">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
