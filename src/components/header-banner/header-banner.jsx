import "./styles.scss";
import config from "./data/config.json";

const HeaderBanner = ({ title }) => {
  return (
    <header>
      <div className="fullwidth-banner">
        <img src={config.images[0]} />
      </div>

      <div className="hero-text">
        <h1>{title}</h1>
      </div>
    </header>
  );
};

export default HeaderBanner;
