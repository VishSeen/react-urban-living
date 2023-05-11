import config from "./data/config.json";
import "./styles.scss";

const NavBar = ({ isOpen }) => {
  return (
    <div className={`nav-bar ${isOpen ? "active" : ""}`}>
      <div className="nav-content">
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

      <div className="nav-footer">
        <div className="address"></div>
      </div>
    </div>
  );
};

export default NavBar;
