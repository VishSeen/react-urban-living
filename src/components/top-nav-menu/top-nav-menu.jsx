import data from "./data.json";

const TopNavMenu = () => {
  return (
    <div className="menu-container">
      <ul>
        {data.links.forEach((element) => {
          <li className="menu-item">
            <a href="{element.href}">{element.name}</a>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default TopNavMenu;
