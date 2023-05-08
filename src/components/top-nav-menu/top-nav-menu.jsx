import data from "./data.json";

const link = ["home", "about", "projects", "services", "contact"]

const TopNavMenu = () => {
    return (
        <div className="menu-container">
            <ul>
                {
                    data.links.map((item) => (
                        <li className="menu-item">
                            <a href="{item.href}">{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
};

export default TopNavMenu;
